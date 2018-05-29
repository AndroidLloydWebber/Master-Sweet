import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SearchBoxer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        // const { history } = this.props;
        let name = this.state.search;
        this.setState({search: ''});
        window.location.href = `/search/${name}`;
        // history.push(`/search/${name}`);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <form onSubmit={this.onSubmit} className="navbar-form navbar-left">
                <div className="form-group">
                    <input onChange={this.onChange.bind(this)} required value={this.state.search} name="search" type="text" className="form-control" placeholder="Search name"/>
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        )
    }
}

export default withRouter(SearchBoxer);
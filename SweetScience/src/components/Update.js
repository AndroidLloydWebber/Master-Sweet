import React, { Component } from 'react';
import axios from 'axios';

class Update extends Component {

    constructor(props) {
        super(props);

        this.state = {
            globalId: '',
            name: '',
            bouts: '',
            rounds: '',
            residence: '',
            nationality: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        

        axios.put(`http://localhost:5000/api/boxers/update/${this.props.match.params.id}`, {
            globalId: this.state.globalId,
            name: this.state.name,
            bouts: this.state.bouts,
            rounds: this.state.rounds,
            residence: this.state.residence,
            nationality: this.state.nationality
        })
        .then(res => {
            this.props.history.push('/');
        })
        .catch(err => console.log(err));

        console.log(this.state);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return(
            <div className="col-md-6 col-md-offset-2">
                <h3>Update</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input name="globalId" className="form-control" onChange={this.onChange.bind(this)} placeholder="globalId" type="text"/> 
                    </div>
                    <div className="form-group">
                        <input name="name" className="form-control" onChange={this.onChange.bind(this)} placeholder="Name" type="text"/> 
                    </div>
                    <div className="form-group">
                        <input name="bouts" className="form-control" onChange={this.onChange.bind(this)} placeholder="bouts" type="text"/> 
                    </div>
                    <div className="form-group">
                        <input name="rounds" className="form-control" onChange={this.onChange.bind(this)} placeholder="rounds" type="text"/> 
                    </div>
                    <div className="form-group">
                        <input name="residence" className="form-control" onChange={this.onChange.bind(this)} placeholder="residence" type="text"/>
                    </div>
                    <div className="form-group">
                        <input name="nationality" className="form-control" onChange={this.onChange.bind(this)} placeholder="nationality" type="text"/> 
                    </div>
                    <button className="btn btn-warning" type="submit">Update</button>
                </form>
            </div>
        )
    }
}

export default Update;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import './Register.css';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                name: '',
                email: '',
                password: ''
            },
            errors: {}
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            photo: this.state.photo,
            boxers: this.state.boxers
        };
        console.log(newUser);

        this.props.registerUser(newUser, this.props.history);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
    }

    render() {
        return(
            <div className="col-md-6  registerField">
                <h3>Register Here</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input name="name" className="form-control" onChange={this.onChange.bind(this)} placeholder="Name" type="text"/> 
                    </div>
                    <div className="form-group">
                        <input name="email" className="form-control" onChange={this.onChange.bind(this)} placeholder="Email" type="email"/>
                    </div>
                    <div className="form-group">
                        <input name="password" className="form-control" onChange={this.onChange.bind(this)} placeholder="Password" type="password"/> 
                    </div>

                    <div className="form-group">
                        <input name="photo" className="form-control" onChange={this.onChange.bind(this)} placeholder="Link to Profile Photo" type="link"/> 
                    </div>
                    <button className="btn btn-primary" type="submit">Sign up</button>

                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {registerUser})(withRouter(Register));
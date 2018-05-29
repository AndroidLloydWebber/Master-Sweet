import React, { Component } from 'react';
import { loginUser } from '../../actions/authActions';
import { connect } from 'react-redux';
import store from '../../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../../actions/authActions';
import { Link } from 'react-router-dom';
import './Login.css';


if (localStorage.jwtToken) {
    // Set auth token header auth
    setAuthToken(localStorage.jwtToken);
    // Decode token and get user info and exp
    const decoded = jwt_decode(localStorage.jwtToken);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  
    // Check for expired token
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        // Logout user
        store.dispatch(logoutUser());
        
        // Redirect to login
        window.location.href = '/login';
    }
}

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                email: '',
                password: ''
            },
            errors: {}
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    // componentDidMount() {
    //     if (this.props.auth.isAuthenticated) {
    //         this.props.history.push('/');
    //     }
    // }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(newUser);

        this.props.loginUser(newUser);
    }

    render() {
        return(
            <div className="loginField">
            <div className="col-md-6">
                <h3>Login Here</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input name="email" className="form-control" onChange={this.onChange.bind(this)} placeholder="Email" type="email"/>
                    </div>
                    <div className="form-group">
                        <input name="password" className="form-control" onChange={this.onChange.bind(this)} placeholder="Password" type="password"/> 
                    </div>
                    <button className="btn btn-primary" type="submit">Login</button>
                </form>
            </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
  
export default connect(mapStateToProps, { loginUser })(Login);
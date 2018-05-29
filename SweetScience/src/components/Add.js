import React, { Component } from 'react';
import axios from 'axios';
import store from '../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';

// Check for token
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

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            globalId: '',
            name: '',
            bouts: '',
            rounds: '',
            residence: '',
            nationality: '',
            knockoutPercentage: '',
            stance: '',
            weightDivision: '',
            height: '',
            birthPlace: '',
            dob: '',
            wins: '',
            winsKO: '',
            draws: '',
            losses: '',
            lossesKO: '',
            images: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();

        const newBoxer = {
            globalId: this.state.globalId,
            name: this.state.name,
            bouts: this.state.bouts,
            rounds: this.state.rounds,
            residence: this.state.residence,
            nationality: this.state.nationality,
            knockoutPercentage: this.state.knockoutPercentage,
            stance: this.state.stance,
            weightDivision: this.state.weightDivision,
            height: this.state.height,
            birthPlace: this.state.birthPlace,
            dob: this.state.dob,
            wins: this.state.wins,
            winsKO: this.state.winsKO,
            draws: this.state.draws,
            losses: this.state.losses,
            lossesKO: this.lossesKO
        };

        axios.post('/api/boxers/add/', newBoxer)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        this.props.history.push('/');
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
                    <button className="btn btn-warning" type="submit">Add new</button>
                </form>
            </div>
        )
    }
}

export default Add;
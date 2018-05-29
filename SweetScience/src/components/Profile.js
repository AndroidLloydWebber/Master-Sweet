import React, { Component } from 'react';
import { setCurrentUser } from '../actions/authActions';
import { connect } from 'react-redux';


class Profile extends Component {


    render() {
        return(
            <div>
                <h3>Welcome User</h3>
                <img src="http://style.anu.edu.au/_anu/4/images/placeholders/person.png" alt="User Avatar"/>
            </div>
        )
    }
}

export default Profile;
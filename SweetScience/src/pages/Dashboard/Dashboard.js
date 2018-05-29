import React, {  Component } from 'react';
import Profile from '../../components/Profile';
import Myboxers from "../../components/Myboxers";
import List from "../../components/List";
import './Dashboard.css';


class Dashboard extends Component {
    render() {
        return(
            <div>
                <div className="col-md-4">
                    <Profile/>
                </div>
                <div className="col-md-8">
                    <h3>My Saved Boxers</h3>
                    <Myboxers/>
                </div>
            </div>
        )
    }
}

export default Dashboard;
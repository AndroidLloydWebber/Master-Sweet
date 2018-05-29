import React, {  Component } from 'react';
import Profile from './Profile';
import List from './List';

class Home extends Component {

    render() {
        return(
            <div>
                <div className="col-md-4">
                    <Profile/>
                </div>
                <div className="col-md-8">
                    <List/>
                    {/* <Link to="/boxer/123">single</Link> */}
                </div>
            </div>
        )
    }
}

export default Home;
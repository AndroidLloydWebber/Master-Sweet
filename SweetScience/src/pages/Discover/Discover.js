import React, {  Component } from 'react';
import List from '../../components/List';

class Discover extends Component {
    render() {
        return(
            <div>
                <div className="col-md-8">
                <h1>Click on a boxer's name to see statistics and data</h1>
                <List/>
                {/* <Link to="/boxer/123">single</Link> */}
                </div>
            </div>
        )
    }
}
export default Discover;
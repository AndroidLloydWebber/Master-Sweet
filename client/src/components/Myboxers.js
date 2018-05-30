import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import "./Myboxers.css"

class Myboxers extends React.Component {


    render() {
        return(
        <div>
            <div className="list-group">
                <div className="list-group-item">Andy Vasquez<span className="delete">-</span></div>
                <div className="list-group-item">Manuel Ortiz<span className="delete">-</span></div>
                <div className="list-group-item">Horace Mann<span className="delete">-</span></div>
                <div className="list-group-item">Pedro Ramirez<span className="delete">-</span></div>
            </div>            

        </div>
        )
    }
}

export default Myboxers;
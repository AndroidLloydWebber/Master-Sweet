import React from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from 'os';
import axios from 'axios';
import "./List.css"

class List extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            boxers: [],
            Myboxers: []
        };

    }

    componentDidMount() {
        fetch('http://localhost:5000/api/boxers/', {method: 'GET'})
            .then(res => res.json())
            .then(boxers => {
                this.setState({boxers: boxers});
            })
            .catch(err => console.log(err));
    }

    addBoxer() {
        axios.post('http://localhost:5000/api/myboxers/', {method: 'POST'})
            .then(res => res.json())
            .then(boxers => {
                this.setState({boxers: boxers});
            })
            .catch(err => console.log(err));
    }

    addBoxer = _id => {
        
        const Myboxers = this.state.Myboxers.push(boxer => boxer._id);

        this.setState({ Myboxers });


      };

    render() {
        var boxers = this.state.boxers.map((boxer, index) =>
        <Link key={index} to={`/boxer/${boxer._id}`} className="list-group-item">
            {boxer.name}
            <span onClick={(boxer) => this.addBoxer(boxer._id)} className="add">
                    +
            </span>
        </Link>
        );

    return (
        <div className="list-group">
            {boxers}
        </div>
        )
    }
}

export default List;
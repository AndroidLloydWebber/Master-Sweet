import React from 'react';
import { Link } from 'react-router-dom';

class Single extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            boxer: {},
            myBoxers: []
        };
    }

    onDelete(e) {

        console.log(this.props.match.params.id);

        fetch(`http://localhost:5000/api/boxers/delete/${this.props.match.params.id}`, {method: 'DELETE'})
            .then(res => console.log(res))
            .catch(err => console.log(err));

        this.props.history.push('/');

        console.log(this.props.match.params.id);

        fetch(`http://localhost:5000/api/boxers/delete/${this.props.match.params.id}`, {method: 'DELETE'})
            .then(res => console.log(res))
            .catch(err => console.log(err));

        this.props.history.push('/');
    }

    addBoxer = _id => {
        
        const myBoxers = this.state.myBoxers.push(boxer => boxer._id);

        this.setState({ myBoxers });
    };

    componentDidMount(){
        fetch(`http://localhost:5000/api/boxers/${this.props.match.params.id}`, {method: 'GET'})
            .then(res => res.json())
            .then(boxer => {
                this.setState({boxer: boxer});
                console.log(boxer);
            })
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                <h3>{this.state.boxer.name}</h3>
                <div className="col-md-4">
                    <img src={this.state.boxer.image} alt=""/>
                </div>
                <div className="col-md-4">
                    <div style={{marginTop: '50px'}}>
                        <table className="table table-stripped">
                            <tbody>
                                <tr>
                                    <td><b>Global ID</b></td>
                                    <td>{this.state.boxer.globalId}</td>
                                </tr>
                                <tr>
                                    <td><b>Bouts</b></td>
                                    <td>{this.state.boxer.bouts}</td>
                                </tr>
                                <tr>
                                    <td><b>Rounds</b></td>
                                    <td>{this.state.boxer.rounds}</td>
                                </tr>
                                <tr>
                                    <td><b>Residence</b></td>
                                    <td>{this.state.boxer.residence}</td>
                                </tr>
                                <tr>
                                    <td><b>Nationality</b></td>
                                    <td>{this.state.boxer.nationality}</td>
                                </tr>
                                <tr>
                                    <td><b>Weight Division</b></td>
                                    <td>{this.state.boxer.weightDivision}</td>
                                </tr>
                                <tr>
                                    <td><b>Wins</b></td>
                                    <td>{this.state.boxer.wins}</td>
                                </tr>
                                <tr>
                                    <td><b>Losses</b></td>
                                    <td>{this.state.boxer.losses}</td>
                                </tr>
                                <tr>
                                    <td><b>Draws</b></td>
                                    <td>{this.state.boxer.draws}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <Link to={`/update/${this.state.boxer._id}`} className="btn btn-primary">Update</Link>
                    <a href="# " onClick={this.onDelete.bind(this)} className="btn btn-warning">Delete</a>
                    <a href="# " onClick={this.addBoxer.bind(this)} className="btn btn-success">Add to My Boxers</a>
                </div>
            </div>
        )
    }
}

export default Single;
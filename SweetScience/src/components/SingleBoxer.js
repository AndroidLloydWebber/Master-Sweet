import React, { Component } from 'react';

class SingleBoxer extends Component {

    constructor(props){
        super(props);

        this.state = {
            boxer: {
                id: 1,
                name: '',
                points: '',
                division: '',
                career: '',
                wins: 50,
                losses: 0,
                draws: 0,
                stance: '',
                hometown: '',
                image: ''
            },
            boxers: [
                {
                    id: 1,
                    name: 'Floyd Mayweather Jr',
                    points: '2,248',
                    division: 'welterweight',
                    career: '1996-2017',
                    wins: 50,
                    losses: 0,
                    draws: 0,
                    stance: 'orthodox',
                    hometown: 'Grand Rapids, Michigan, USA',
                    image: 'http://static.boxrec.com/thumb/8/88/PrettyBoyFloydMoneyMayweather.jpg/200px-PrettyBoyFloydMoneyMayweather.jpg'
                },
                {
                    id: 2,
                    name: 'Sugar Ray Robinson',
                    points: '1,618',
                    division: 'middleweight',
                    career: '1940-1965',
                    wins: 174,
                    losses: 19,
                    draws: 6,
                    stance: 'orthodox',
                    hometown: 'Vidalia, Georgia, USA',
                    image: 'http://static.boxrec.com/thumb/2/2d/Sugar_Ray_Robinson_Pic0040.jpg/200px-Sugar_Ray_Robinson_Pic0040.jpg'
                },
                {
                    id: 3,
                    name: 'Joe Louis',
                    points: '1,561',
                    division: 'heavyweight',
                    career: '1934-1951',
                    wins: 66,
                    losses: 3,
                    draws: 2,
                    stance: 'orthodox',
                    hometown: 'LaFayette, Alabama, U.S.A.',
                    image: 'http://static.boxrec.com/v51static/images/f7f1cae.png'
                },
                {
                    id: 4,
                    name: 'Jack Johnson',
                    points: '1,482',
                    division: 'heavyweight',
                    career: '1897-1931',
                    wins: 56,
                    losses: 11,
                    draws: 8,
                    stance: 'orthodox',
                    hometown: 'Galveston, Texas, U.S.A.',
                    image: 'http://static.boxrec.com/thumb/8/87/JackJohnsonCuracao.jpg/200px-JackJohnsonCuracao.jpg'
                },
                {
                    id: 5,
                    name: 'Muhammad Ali',
                    points: '1,480',
                    division: 'heavyweight',
                    career: '1960-1981',
                    wins: 56,
                    losses: 5,
                    draws: 0,
                    stance: 'orthodox',
                    hometown: 'Louisville, Kentucky, U.S.A.',
                    image: 'http://static.boxrec.com/v51static/images/f7f1cae.png'
                },
                {
                    id: 6,
                    name: 'Carlos Monzon',
                    points: '1,346',
                    division: 'middleweight',
                    career: '1963-1977',
                    wins: 87,
                    losses: 3,
                    draws: 9,
                    stance: 'orthodox',
                    hometown: 'San Javier, Santa Fe, Argentina',
                    image: 'http://static.boxrec.com/thumb/0/0f/Monzon-1975.jpg/200px-Monzon-1975.jpg'
                },
                {
                    id: 7,
                    name: 'Roberto Duran',
                    points: '1,299',
                    division: 'lightweight',
                    career: '1968-2001',
                    wins: 103,
                    losses: 1,
                    draws: 2,
                    stance: 'orthodox',
                    hometown: 'El Chorrillo, Panama, Panama',
                    image: 'http://static.boxrec.com/v51static/images/f7f1cae.png'
                },
                {
                    id: 8,
                    name: 'Henry Armstrong',
                    points: '1,299',
                    division: 'welterweight',
                    career: '1968-2001',
                    wins: 152,
                    losses: 1,
                    draws: 2,
                    stance: 'orthodox',
                    hometown: 'Columbia, Mississippi, U.S.A.',
                    image: 'http://static.boxrec.com/v51static/images/f7f1cae.png'
                },
                {
                    id: 9,
                    name: 'Gene Tunney',
                    points: '1,297',
                    division: 'heavyweight',
                    career: '1915-1928',
                    wins: 65,
                    losses: 1,
                    draws: 1,
                    stance: 'orthodox',
                    hometown: 'New York, New York, U.S.A.',
                    image: 'http://static.boxrec.com/thumb/0/01/Tunney_117880770.jpg/200px-Tunney_117880770.jpg'
                },
                {
                    id: 10,
                    name: 'Marvin Hagler',
                    points: '1,297',
                    division: 'middleweight',
                    career: '1973-1987',
                    wins: 62,
                    losses: 3,
                    draws: 2,
                    stance: 'southpaw',
                    hometown: 'Newark, New Jersey, U.S.A.',
                    image: 'http://static.boxrec.com/thumb/e/e3/MMH.jpg/200px-MMH.jpg'
                }
            ]
        }
    }

    componentDidMount(){
        this.state.boxers.find(boxer => {
            if(boxer.id == this.props.match.params.id){
                this.setState({
                    boxer: {
                        id: boxer.id,
                        name: boxer.name,
                        points: boxer.points,
                        division: boxer.division,
                        career: boxer.career,
                        wins: boxer.wins,
                        losses: boxer.losses,
                        draws: boxer.draws,
                        stance: boxer.stance,
                        hometown: boxer.hometown,
                        image: boxer.image
                    }
                });
                //console.log(this.state.boxer);
            }
            else{
                return null;
            }
        });
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
                                    <td><b>Points</b></td>
                                    <td>{this.state.boxer.points}</td>
                                </tr>
                                <tr>
                                    <td><b>Division</b></td>
                                    <td>{this.state.boxer.division}</td>
                                </tr>
                                <tr>
                                    <td><b>Stance</b></td>
                                    <td>{this.state.boxer.stance}</td>
                                </tr>
                                <tr>
                                    <td><b>Home town</b></td>
                                    <td>{this.state.boxer.hometown}</td>
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
                </div>
            </div>
        )
    }
}

export default SingleBoxer;
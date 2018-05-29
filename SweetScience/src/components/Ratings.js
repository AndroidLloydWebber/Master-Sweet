import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ratings extends Component {

    constructor(props){
        super(props);

        this.state = {
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

    render() {
        let ratings = this.state.boxers.map((boxer, index) => 
            <tr key={index}>
                <td>
                    <span>{boxer.id}</span>
                </td>
                <td>
                    <Link to={`/single-boxer/${boxer.id}`} style={{float: 'left'}}>
                    {boxer.name}
                    </Link>
                    {/* <a  href="boxrec.com/en/boxer/352" className="personLink"></a> */}
                </td>
                <td>{boxer.points}
                </td>
                <td>
                    <div>
                        <div>
                            <span className="starBase">
                                <span className="starRating"></span>
                            </span>
                        </div>
                    </div>
                </td>
                <td>  {boxer.division}
                </td>
                <td>  {boxer.career}
                </td>
                <td>
                    <div style={{float: 'left'}}>
                        <span className="textWon">{boxer.wins} </span>&nbsp;<span className="textLost">- {boxer.losses}</span>&nbsp;<span className="textDraw">- {boxer.draws}</span>
                    </div>
                    <div className="rowLast6">
                        <div style={{float: 'right'}}>
                            <div className="last6 bgW"></div>
                            <div className="last6 bgW"></div>
                            <div className="last6 bgW"></div>
                            <div className="last6 bgW"></div>
                            <div className="last6 bgW"></div>
                            <div className="last6 bgD"></div>
                            <div></div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </td>
                <td>{boxer.stance}
                </td>
                <td>
                    <div style={{float: 'left'}}>
                        {boxer.hometown}
                    </div>                                        
                </td>
            </tr>
        );
        return(
            <div>
                <div className="row">
                    <div className="col-md-4 col-md-offset-3">
                        <h3>Ratings</h3>
                        <form>
                            <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">world</option>
                                    <option>Asia</option>
                                    <option>Africa</option>
                                    <option>Europe</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">weight class</option>
                                    <option>heavyweight</option>
                                    <option>cruiserweight</option>
                                    <option>light heavyweight</option>
                                    <option>super middleweight</option>
                                    <option>middleweight</option>
                                    <option>super welterweight</option>
                                    <option>superlight</option>
                                    <option>lightweight</option>
                                    <option>super featherweight</option>
                                    <option>featherweight</option>
                                </select>
                            </div>
                            {/* <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">male</option>
                                    <option>female</option>
                                </select>
                            </div> */}
                            <div className="form-group">
                                <select className="form-control">
                                    <option selected="true">orthodox</option>
                                    <option>southpaw</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="radio-inline"><input type="radio" name="optradio"/>Active</label>
                                <label className="radio-inline"><input type="radio" name="optradio"/>Active or Inactive</label>
                            </div>
                            <input type="submit" className="btn btn-danger" value="go"/>
                        </form>
                    </div>
                </div>
                <div className="row" style={{marginTop: '30px'}}>
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>image</th>
                                    <th>name</th>
                                    <th>points</th>
                                    <th></th>
                                    <th>division</th>
                                    <th>career</th>
                                    <th className="hideMob">wins-losses-draws <div style={{float:'right',marginRight:'48px'}}></div></th>
                                    <th>stance</th>
                                    <th>hometown</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ratings}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ratings;
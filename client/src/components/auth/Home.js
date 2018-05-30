import React, {  Component } from 'react';
import Login from './Login';
import Register from './Register';
import './Home.css';
import '../Champions'


class Home extends Component {
    componentDidMount () {
        console.log( "test on mount" )
        document.body.classList.add( "home-body" );
    }

    componentWillUnmount () {
        console.log( "test on unmount" )
        document.body.classList.remove( "home-body" );
    }

    render() {
        return(      
            <div className = "row">
                <div className = "body col-xs-12 col-md-4 signIn">
                    <div>
                        <h3>Login or register to get started!</h3>
                        <div className="col-md-6">
                            <Login />
                        </div>
                        <div className="col-md-6">
                            <Register />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-8">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>BoxRec</th>
                            <th>WBC</th>
                            <th>IBO</th>
                            <th>WBO</th>
                            <th>IBF</th>
                            <th>WBA</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>heavyweight</td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659461" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Anthony<br/>Joshua
                                    </div>
                                </a>
                                <a href="/en/boxer/659461">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/f/fb/Anthony_Joshua.jpeg/200px-Anthony_Joshua.jpeg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/468841" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Deontay<br/>Wilder
                                    </div>
                                </a>
                                <a href="/en/boxer/468841">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/5/5f/DeontayWilder12.jpg/200px-DeontayWilder12.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659461" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Anthony<br/>Joshua
                                    </div>
                                </a>
                                <a href="/en/boxer/659461">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/f/fb/Anthony_Joshua.jpeg/200px-Anthony_Joshua.jpeg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659461" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Anthony<br/>Joshua
                                    </div>
                                </a>
                                <a href="/en/boxer/659461">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/f/fb/Anthony_Joshua.jpeg/200px-Anthony_Joshua.jpeg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659461" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Anthony<br/>Joshua
                                    </div>
                                </a>
                                <a href="/en/boxer/659461">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/f/fb/Anthony_Joshua.jpeg/200px-Anthony_Joshua.jpeg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/314362" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag sy"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Manuel<br/>Charr
                                    </div>
                                </a>
                                <a href="/en/boxer/314362">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/2/26/ManuelCharr1.jpg/200px-ManuelCharr1.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>cruiserweight</td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659772" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ua"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Oleksandr<br/>Usyk
                                    </div>
                                </a>
                                <a href="/en/boxer/659772">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/8e/OleksandrU.JPG/200px-OleksandrU.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659772" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ua"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Oleksandr<br/>Usyk
                                    </div>
                                </a>
                                <a href="/en/boxer/659772">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/8e/OleksandrU.JPG/200px-OleksandrU.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/587030" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag za"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Kevin<br/>Lerena
                                    </div>
                                </a>
                                <a href="/en/boxer/587030">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/a/a9/Kevin_Lerena.jpg/200px-Kevin_Lerena.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659772" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ua"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Oleksandr<br/>Usyk
                                    </div>
                                </a>
                                <a href="/en/boxer/659772">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/8e/OleksandrU.JPG/200px-OleksandrU.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/583767" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ru"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Murat<br/>Gassiev
                                    </div>
                                </a>
                                <a href="/en/boxer/583767">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/b/b0/Gassiev.jpg/200px-Gassiev.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top"  style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/572144" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag fr"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Arsen<br/>Goulamirian
                                    </div>
                                </a>
                                <a href="/en/boxer/572144">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/a/a7/Goulamirian_Arsen.jpg/200px-Goulamirian_Arsen.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingTop: '50px'}}>light heavyweight</td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                        Adonis<br/>Stevenson
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/e/e3/AStevenson.jpg/200px-AStevenson.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Oleksandr<br/>Gvozdyk
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/4/44/Oleksandr_Gvozdyk1987.jpg/200px-Oleksandr_Gvozdyk1987.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Karo<br/>Murat
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/5/52/Karen_Muratyan.jpg/200px-Karen_Muratyan.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Sergey<br/>Kovalev
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/9/96/SergeyKovalev1.jpg/200px-SergeyKovalev1.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Artur<br/>Beterbiev
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/7/77/Artur_Beterbiev21.jpg/200px-Artur_Beterbiev21.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Dmitry<br/>Bivol
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/7/7d/DmitryBivol.jpg/200px-DmitryBivol.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingTop: '50px'}}>super middleweight</td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                        George Groves
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/1/14/GeorgeGroves.jpg/200px-GeorgeGroves.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Oleksandr<br/>Gvozdyk
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/4/44/Oleksandr_Gvozdyk1987.jpg/200px-Oleksandr_Gvozdyk1987.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Karo<br/>Murat
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/5/52/Karen_Muratyan.jpg/200px-Karen_Muratyan.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Sergey<br/>Kovalev
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/9/96/SergeyKovalev1.jpg/200px-SergeyKovalev1.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Artur<br/>Beterbiev
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/7/77/Artur_Beterbiev21.jpg/200px-Artur_Beterbiev21.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                            <td>
                                <div className="pull-left">
                                    <a>
                                        <div>
                                            Dmitry<br/>Bivol
                                        </div>
                                    </a>
                                    <a>
                                        <div className="clearfix"></div>
                                        <div>
                                            <img border="0" src="http://static.boxrec.com/thumb/7/7d/DmitryBivol.jpg/200px-DmitryBivol.jpg" width="80px" alt=""/>
                                        </div>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>middleweight</td>
                            <td valign="top">
                                            <a href="/en/boxer/348759" className="personLink">
                                <div style={{float: 'left'}}><div className="flag mx"></div></div>
                                <div style={{float: 'left'}}>
                                    Saul<br/>Alvarez
                                </div>
                                </a>
                                <a href="/en/boxer/348759">
                                <div className="clearfix"></div>
                                    <div>
                                        <img border="0" src="http://static.boxrec.com/thumb/5/59/Santos_Saul_Alvarez_Barragan.jpg/200px-Santos_Saul_Alvarez_Barragan.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top">
                                            <a href="/en/boxer/356831" className="personLink">
                                <div style={{float: 'left'}}><div className="flag kz"></div></div>
                                <div style={{float: 'left'}}>
                                    Gennady<br/>Golovkin
                                </div>
                                </a>
                                <a href="/en/boxer/356831">
                                <div className="clearfix"></div>
                                <div>
                                        <img border="0" src="http://static.boxrec.com/thumb/b/b9/GGG.jpg/200px-GGG.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top">
                                <a href="/en/boxer/356831" className="personLink">
                                    <div style={{float: 'left'}}><div className="flag kz"></div></div>
                                    <div style={{float: 'left'}}>
                                        Gennady<br/>Golovkin
                                    </div>
                                </a>
                                <a href="/en/boxer/356831">
                                    <div className="clearfix"></div>
                                    <div>
                                        <img border="0" src="http://static.boxrec.com/thumb/b/b9/GGG.jpg/200px-GGG.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>

                            <td valign="top">
                                <a href="/en/boxer/482499" className="personLink">
                                    <div style={{float: 'left'}}><div className="flag uk"></div></div>
                                    <div style={{float: 'left'}}>
                                        Billy Joe<br/>Saunders
                                    </div>
                                </a>
                                <a href="/en/boxer/482499">
                                    <div className="clearfix"></div>
                                    <div>
                                        <img border="0" src="http://static.boxrec.com/thumb/a/ab/BJSaunders31.jpg/200px-BJSaunders31.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>


        
                            <td valign="top">
                                <a href="/en/boxer/356831" className="personLink">
                                    <div style={{float: 'left'}}><div className="flag kz"></div></div>
                                    <div style={{float: 'left'}}>
                                        Gennady<br/>Golovkin
                                    </div>
                                </a>
                                <a href="/en/boxer/356831">
                                    <div className="clearfix"></div>
                                    <div>
                                        <img border="0" src="http://static.boxrec.com/thumb/b/b9/GGG.jpg/200px-GGG.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>

                            <td valign="top">
                                <a href="/en/boxer/657422" className="personLink">
                                    <div style={{float: 'left'}}><div className="flag jp"></div></div>
                                    <div style={{float: 'left'}}>
                                        Ryota<br/>Murata
                                    </div>
                                </a>
                                <a href="/en/boxer/657422">
                                    <div className="clearfix"></div>
                                    <div>
                                        <img border="0" src="http://static.boxrec.com/thumb/7/78/RMurata1.jpg/200px-RMurata1.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                          </td>
                        </tr>
                        <tr>
                            <td>super welterweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/625960" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jarrett<br/>Hurd
                                    </div>
                                </a>
                                <a href="/en/boxer/625960">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/e3/JarrettHurd20161.JPG/200px-JarrettHurd20161.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/433135" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jermell<br/>Charlo
                                    </div>
                                </a>
                                <a href="/en/boxer/433135">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/0/06/Jermell_Charlo1990.jpg/200px-Jermell_Charlo1990.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/625960" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jarrett<br/>Hurd
                                    </div>
                                </a>
                                <a href="/en/boxer/625960">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/e3/JarrettHurd20161.JPG/200px-JarrettHurd20161.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659924" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jaime<br/>Munguia
                                    </div>
                                </a>
                                <a href="/en/boxer/659924">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/6/65/JaimeMunguia1.JPG/200px-JaimeMunguia1.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/625960" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jarrett<br/>Hurd
                                    </div>
                                </a>
                                <a href="/en/boxer/625960">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/e3/JarrettHurd20161.JPG/200px-JarrettHurd20161.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/625137" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ar"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Brian Carlos<br/>Castano
                                    </div>
                                </a>
                                <a href="/en/boxer/625137">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/b/b9/Castano_Head.jpg/200px-Castano_Head.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>welterweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/635000" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag au"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jeff<br/>Horn
                                    </div>
                                </a>
                                <a href="/en/boxer/635000">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/3/3e/JeffHorn.jpg/200px-JeffHorn.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/635000" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag au"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jeff<br/>Horn
                                    </div>
                                </a>
                                <a href="/en/boxer/635000">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/3/3e/JeffHorn.jpg/200px-JeffHorn.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/629465" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Errol<br/>Spence Jr
                                    </div>
                                </a>
                                <a href="/en/boxer/629465">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/0/05/Errol_spence.jpg/200px-Errol_spence.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/256942" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ar"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Lucas Martin<br/>Matthysse
                                    </div>
                                </a>
                                <a href="/en/boxer/256942">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/83/LMMatthysse.jpg/200px-LMMatthysse.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>super lightweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/447121" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Terence<br/>Crawford
                                    </div>
                                </a>
                                <a href="/en/boxer/447121">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/7/70/Crawford_Terence.jpg/200px-Crawford_Terence.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/632104" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jose Carlos<br/>Ramirez
                                    </div>
                                </a>
                                <a href="/en/boxer/632104">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/0/0b/Jose_Carlos_Ramirez.jpg/200px-Jose_Carlos_Ramirez.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/535556" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag fr"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Mohamed<br/>Mimoune
                                    </div>
                                </a>
                                <a href="/en/boxer/535556">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/0/05/535556.jpg/200px-535556.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/570150" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag by"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Kiryl<br/>Relikh
                                    </div>
                                </a>
                                <a href="/en/boxer/570150">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/5/57/KirillRelikh123.jpg/200px-KirillRelikh123.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>lightweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/659771" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ua"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Vasyl<br/>Lomachenko
                                    </div>
                                </a>
                                <a href="/en/boxer/659771">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/6/68/Vasyl_Lomachenko1.JPG/200px-Vasyl_Lomachenko1.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/364679" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Mikey<br/>Garcia
                                    </div>
                                </a>
                                <a href="/en/boxer/364679">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/a/a9/MGarcia.jpg/200px-MGarcia.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/289944" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag gh"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Emmanuel<br/>Tagoe
                                    </div>
                                </a>
                                <a href="/en/boxer/289944">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/5/52/Tagoe_Emmanuel.jpg/200px-Tagoe_Emmanuel.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/19566" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Raymundo<br/>Beltran
                                    </div>
                                </a>
                                <a href="/en/boxer/19566">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/84/Beltran11.jpg/200px-Beltran11.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/631773" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Robert<br/>Easter Jr
                                    </div>
                                </a>
                                <a href="/en/boxer/631773">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/3/37/RobertEasterJr.jpg/200px-RobertEasterJr.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                        </tr>
                        <tr>
                            <td>super featherweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/553222" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Miguel<br/>Berchelt
                                    </div>
                                </a>
                                <a href="/en/boxer/553222">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/1/16/MBerchelt.jpg/200px-MBerchelt.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/553222" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Miguel<br/>Berchelt
                                    </div>
                                </a>
                                <a href="/en/boxer/553222">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/1/16/MBerchelt.jpg/200px-MBerchelt.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/740705" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag tj"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Shavkatdzhon<br/>Rakhimov
                                    </div>
                                </a>
                                <a href="/en/boxer/740705">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/7/72/740705.jpg/200px-740705.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/634553" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag pr"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Alberto<br/>Machado
                                    </div>
                                </a>
                                <a href="/en/boxer/634553">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/ee/Albertomachado1.JPG/200px-Albertomachado1.JPG" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>featherweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/374624" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Leo<br/>Santa Cruz
                                    </div>
                                </a>
                                <a href="/en/boxer/374624">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/8d/Leodegario_Santa_Cruz.jpg/200px-Leodegario_Santa_Cruz.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/479775" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Gary<br/>Russell Jr
                                    </div>
                                </a>
                                <a href="/en/boxer/479775">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/2/27/GRussell_Jr.jpg/200px-GRussell_Jr.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/499601" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Carl<br/>Frampton
                                    </div>
                                </a>
                                <a href="/en/boxer/499601">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/4/49/CarlFrampton1.jpg/200px-CarlFrampton1.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/512777" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Josh<br/>Warrington
                                    </div>
                                </a>
                                <a href="/en/boxer/512777">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/d/d7/JoshWarrington1.jpg/200px-JoshWarrington1.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/287904" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Abner<br/>Mares
                                    </div>
                                </a>
                                <a href="/en/boxer/287904">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/2/20/Mares_Head.jpg/200px-Mares_Head.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>super bantamweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/611983" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Luis<br/>Nery
                                    </div>
                                </a>
                                <a href="/en/boxer/611983">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/a/a6/LuisNery.jpg/200px-LuisNery.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/542148" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag mx"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Rey<br/>Vargas
                                    </div>
                                </a>
                                <a href="/en/boxer/542148">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/a/ae/Rey_Vargas_Head.jpg/200px-Rey_Vargas_Head.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/661447" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag gh"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Isaac<br/>Dogboe
                                    </div>
                                </a>
                                <a href="/en/boxer/661447">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/3/31/IsaacDogboe.jpg/200px-IsaacDogboe.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/462044" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag jp"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Ryosuke<br/>Iwasa
                                    </div>
                                </a>
                                <a href="/en/boxer/462044">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/d/d4/Ryosuke_Iwasa.jpg/200px-Ryosuke_Iwasa.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/549073" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag us"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Daniel<br/>Roman
                                    </div>
                                </a>
                                <a href="/en/boxer/549073">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/2/25/Roman_Daniel.jpg/200px-Roman_Daniel.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>bantamweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/359270" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag za"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Zolani<br/>Tete
                                    </div>
                                </a>
                                <a href="/en/boxer/359270">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/83/359270.jpg/200px-359270.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/600529" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ph"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Michael<br/>Dasmarinas
                                    </div>
                                </a>
                                <a href="/en/boxer/600529">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/1/18/Michael_Alber_Dasmarinas.jpg/200px-Michael_Alber_Dasmarinas.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/359270" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag za"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Zolani<br/>Tete
                                    </div>
                                </a>
                                <a href="/en/boxer/359270">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/83/359270.jpg/200px-359270.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/614887" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag pr"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Emmanuel<br/>Rodriguez
                                    </div>
                                </a>
                                <a href="/en/boxer/614887">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/1/1f/Emmanuel_Rodriguez_Vazquez.jpg/200px-Emmanuel_Rodriguez_Vazquez.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/677961" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ph"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Reymart<br/>Gaballo
                                    </div>
                                </a>
                                <a href="/en/boxer/677961">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/v51static/images/f7f1cae.png?v0.6" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>super flyweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/528191" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag th"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Wisaksil<br/>Wangek
                                    </div>
                                </a>
                                <a href="/en/boxer/528191">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/d/d5/Srisaket_Sor_Rungvisai.jpg/200px-Srisaket_Sor_Rungvisai.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/528191" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag th"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Wisaksil<br/>Wangek
                                    </div>
                                </a>
                                <a href="/en/boxer/528191">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/d/d5/Srisaket_Sor_Rungvisai.jpg/200px-Srisaket_Sor_Rungvisai.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/365040" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag za"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Gideon<br/>Buthelezi
                                    </div>
                                </a>
                                <a href="/en/boxer/365040">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/81/Buthelezi_Gideon.jpg/200px-Buthelezi_Gideon.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/506289" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ph"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Jerwin<br/>Ancajas
                                    </div>
                                </a>
                                <a href="/en/boxer/506289">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/3/33/Jerwin_Juntilla_Ancajas.jpg/200px-Jerwin_Juntilla_Ancajas.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/613018" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag uk"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Khalid<br/>Yafai
                                    </div>
                                </a>
                                <a href="/en/boxer/613018">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/c/c0/Kal_Yafai.jpg/200px-Kal_Yafai.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>flyweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/215599" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ph"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Donnie<br/>Nietes
                                    </div>
                                </a>
                                <a href="/en/boxer/215599">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/0/0a/Donnie_Liboon_Nietes.jpg/200px-Donnie_Liboon_Nietes.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/652156" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ni"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Cristofer<br/>Rosales
                                    </div>
                                </a>
                                <a href="/en/boxer/652156">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/7/75/CristoferRosales2.jpg/200px-CristoferRosales2.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/649593" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag jp"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Sho<br/>Kimura
                                    </div>
                                </a>
                                <a href="/en/boxer/649593">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/c/c7/Kimura_Sho.jpg/200px-Kimura_Sho.jpg"  alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/577951" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ua"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Artem<br/>Dalakian
                                    </div>
                                </a>
                                <a href="/en/boxer/577951">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/d/da/Dalakian_Artem.jpg/200px-Dalakian_Artem.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>light flyweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/692967" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag jp"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Ken<br/>Shiro
                                    </div>
                                </a>
                                <a href="/en/boxer/692967">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/5/59/Ken_Shiro.jpg/200px-Ken_Shiro.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/692967" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag jp"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Ken<br/>Shiro
                                    </div>
                                </a>
                                <a href="/en/boxer/692967">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/5/59/Ken_Shiro.jpg/200px-Ken_Shiro.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <br/><br/>
                                <img src="http://static.boxrec.com/v51static/images/bf4ea70.png?v0.6" width="80px" alt=""/>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/634552" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag pr"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Angel<br/>Acosta
                                    </div>
                                </a>
                                <a href="/en/boxer/634552">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/ef/Angel_Acosta.jpg/200px-Angel_Acosta.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/397849" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag za"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Hekkie<br/>Budler
                                    </div>
                                </a>
                                <a href="/en/boxer/397849">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/8/8f/Budler_Hekkie.jpg/200px-Budler_Hekkie.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/692641" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag ve"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Carlos<br/>Canizales
                                    </div>
                                </a>
                                <a href="/en/boxer/692641">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/2/22/Carlos_Antonio_Canizales_Civira.jpg/200px-Carlos_Antonio_Canizales_Civira.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>minimumweight</td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/383177" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag th"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Chayaphon<br/>Moonsri
                                    </div>
                                </a>
                                <a href="/en/boxer/383177">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/e3/Wanheng_Menayothin_Head.jpg/200px-Wanheng_Menayothin_Head.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/383177" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag th"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Chayaphon<br/>Moonsri
                                    </div>
                                </a>
                                <a href="/en/boxer/383177">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/e/e3/Wanheng_Menayothin_Head.jpg/200px-Wanheng_Menayothin_Head.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/431648" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag za"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Simphiwe<br/>Khonco
                                    </div>
                                </a>
                                <a href="/en/boxer/431648">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/6/6c/Simphiwe_Khonco.jpg/200px-Simphiwe_Khonco.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/618279" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag jp"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Ryuya<br/>Yamanaka
                                    </div>
                                </a>
                                <a href="/en/boxer/618279">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/4/42/Ryuya_Yamanaka.jpg/200px-Ryuya_Yamanaka.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/752878" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag jp"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Hiroto<br/>Kyoguchi
                                    </div>
                                </a>
                                <a href="/en/boxer/752878">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/d/d4/Hiroto_Kyoguchi.jpg/200px-Hiroto_Kyoguchi.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                            <td valign="top" style={{paddingTop: '5px'}}>
                                <a href="/en/boxer/617144" className="personLink">
                                    <div style={{float: 'left'}}>
                                        <div className="flag th"></div>
                                    </div>
                                    <div style={{float: 'left'}}>
                                        Thammanoon<br/>Niyomtrong
                                    </div>
                                </a>
                                <a href="/en/boxer/617144">
                                    <div className="clearfix"></div>
                                    <div style={{width:'80px',overflow:'hidden',height:'100px'}}>
                                        <img border="0" src="http://static.boxrec.com/thumb/0/0d/Niyomtrong_Thammanoon.jpg/200px-Niyomtrong_Thammanoon.jpg" width="80px" alt=""/>
                                    </div>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
            
            
            
        )

         
    }
    
}



export default Home;
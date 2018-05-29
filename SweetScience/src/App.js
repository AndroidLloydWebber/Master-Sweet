import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Single from './components/Single';
import SingleBoxer from './components/SingleBoxer';
import Dashboard from '../src/pages/Dashboard';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Add from './components/Add';
import Update from './components/Update';
import Search from './components/Search';
import Champions from './components/Champions';
import Ratings from './components/Ratings';
import Home from "./components/auth/Home";
import Discover from "./pages/Discover/Discover";
import './App.css'
// import ali from "./images/ali.jpg";

class App extends Component {
     render() {
          return (
                    <Router>
                         <div className="App">
                              <Navbar/>
                              <div className="container loginBox">
                                   <div className="row">
                                        <Route exact path="/" component={Home}/>
                                        <Route exact path="/register" component={Register}/>
                                        <Route exact path="/add" component={Add}/>
                                        <Route exact path="/login" component={Login}/>
                                        <Route exact path="/champions" component={Champions}/>
                                        <Route exact path="/ratings" component={Ratings}/>
                                        <Route exact path="/boxer/:id" component={Single}/>
                                        <Route exact path="/search/:name" component={Search}/>
                                        <Route exact path="/single-boxer/:id" component={SingleBoxer}/>
                                        <Route exact path="/update/:id" component={Update}/>
                                        <Route exact path="/discover" component={Discover}/>
                                        <Route exact path="/dashboard" component={Dashboard}/>
                                   </div>
                              </div>
                         </div>
                    </Router>
          );
        //   <div>
        //   <img src={ali} classname="ali" alt="ali" height="100" width="225"/>
        //   </div>
     }
}

           

 export default App;

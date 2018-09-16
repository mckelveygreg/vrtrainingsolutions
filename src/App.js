import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

import {
  Route,
  //NavLink,
  HashRouter,
  BrowserRouter
} from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
// add other pages here
class App extends Component {
  
  
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>VR Training Solutions</h1>
          {/* <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink smooth to="/About">About</NavLink></li>
            <li><NavLink to="/board">Board of Directors</NavLink></li>
            <li><NavLink to="/management">Management</NavLink></li>
          </ul> */}
          <div className="content">
          <Home />
          <About />
          <Projects />
            </div>
 
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

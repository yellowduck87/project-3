import React, { Component } from 'react';
import logo from './guirys_logo.png';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="jumbotron">
        <img src={logo} alt="logo"/>
        <a className="guirys-link" href="#">Guiry's Color Source</a>
      </div>
      
    );
  }
}

export default App;

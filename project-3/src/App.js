import React, { Component } from 'react';

import './App.css';
import Nav from './components/nav/nav'
import Jumbotron from './components/header/header';

class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron/>
      <Nav/>
      </div>
      
    );
  }
}

export default App;

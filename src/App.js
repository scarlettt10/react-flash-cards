import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardApp from './components/CardApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Flash Cards</h2>
        </div>
          <CardApp />
        </div>
    );
  }
}

export default App;

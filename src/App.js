import React, { Component } from 'react';
import Sky from './Sky';
import Card from './Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sky />
        <div className="container">
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;

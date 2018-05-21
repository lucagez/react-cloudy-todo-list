import React, { Component } from 'react';
import Sky from './Sky';
import Card from './Card';
// import Button from './Button';
// import HotAir from './HotAir';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sky />
        <div className="container">
          {/* <div className="card shadow gradient">
            <HotAir />
            <Start />
          </div> */}
          <Card/>
        </div>
      </div>
    );
  }
}

export default App;

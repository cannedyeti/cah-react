import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserHand from './components/UserHand';
import GameBoard from './components/GameBoard';

class App extends Component {
  render() {
    return (
      <div>
        <GameBoard />
      </div>
    );
  }
}

export default App;

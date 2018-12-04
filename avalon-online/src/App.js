import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import StartScreen from './components/StartScreen.js'
import Login from './components/Login.js'
import Lobby from './components/Lobby.js'
import LobbyList from './components/LobbyList.js'
import VoteRules from './components/VoteRules.js'
import Gamepage from './components/gamepage/Gamepage.js'
import EndScreen from './components/EndScreen.js'
import Rules from './components/Rules.js'

class App extends Component {
  state = {
    currentScreen: 'Game',
    numberOfPlayers: 9,
    playerNames: ["Ollie", "Max", "JT", "Jung", "Scotti"]
  }

  renderScreen = () => {
    switch(this.state.currentScreen) {
      case 'StartScreen':
        return <StartScreen />
      case 'Game':
        return <Game playerNames={this.state.playerNames} />
      case 'Rules':
        return <Rules numberOfPlayers={this.state.numberOfPlayers} />
    }
  }

  render() {
    return (
      <div className="App">
        {this.renderScreen()}
      </div>
    );
  }
}

export default App;

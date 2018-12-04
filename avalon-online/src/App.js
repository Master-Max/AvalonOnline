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
    currentScreen: 'Gamepage',
    numberOfPlayers: 9,
    missionVoteResults: [null, null, null, null, null],
    voteRound: true,
    votesArray: [],
    missionNumber: 0
  }

  setVotesArray = (vote, id) => {
    let arr = [...this.state.votesArray]
    if (this.state.votesArray.includes()) {
      let index = id - 1
      arr[index] = vote
      this.setState({votesArray: arr})
    } else {
      let count = 0
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "yes") {
          count++
        }
      }
      
    }
  }

  renderScreen = () => {
    switch(this.state.currentScreen) {
      case 'StartScreen':
        return <StartScreen />
      case 'Gamepage':
        return <Gamepage
                numberOfPlayers={this.state.numberOfPlayers}
                missionVoteResults={this.state.missionVoteResults}
                voteRound={this.state.voteRound}
                setVotesArray={this.setVotesArray}
              />
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

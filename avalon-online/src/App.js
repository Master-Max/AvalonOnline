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
    numberOfPlayers: 5,
    missionVoteResults: [null, null, null, null, null],
    voteRound: true,
    votesArray: [],
    missionNumber: 0
  }

  setVotesArray = (vote, id) => {
    let arr = [...this.state.votesArray]
    let index = id - 1
    arr[index] = vote
    this.setState({votesArray: arr})
    setTimeout(() => {
      if (this.areVotesSubmitted()) {
        this.didVotesPass()
      }
    }, 1000)
  }

  didVotesPass = () => {
    let votesToPass = Math.floor(this.state.numberOfPlayers/2) + 1
    let count = 0
    for (var i = 0; i < this.state.votesArray.length; i++) {
      if (this.state.votesArray[i] === "yes") {
        count++
      }
    }
    let mArr = [...this.state.missionVoteResults]
    let index = this.state.missionNumber
    if (count >= votesToPass) {
      mArr.splice(index, 1, "pass")
    } else {
      mArr.splice(index, 1, "fail")
    }
    this.setState({missionVoteResults: mArr})
    let missNum = this.state.missionNumber
    this.setState({missionNumber: missNum+1})
    this.setState({votesArray: []})
  }

  areVotesSubmitted = () => {
    if (!this.state.votesArray.includes() && this.state.votesArray.length === this.state.numberOfPlayers) {
      return true
    } else {
      return false
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

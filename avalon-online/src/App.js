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
import Game from './components/Game.js'
import ActionCable from 'actioncable';


const API = 'http://localhost:4000'
const usersApiEndpoint = `${API}/players`
const roomsApiEndpoint = `${API}/rooms`;

class App extends Component {
  state = {
    currentScreen: 'StartScreen',
    numberOfPlayers: 0,
    missionVoteResults: [null, null, null, null, null],
    voteRound: true,
    votesArray: [],
    missionNumber: 0,
    playerNames: ["Ollie", "Max", "JT", "Jung", "Scotti"],

    // Adding Multiplayer States
    rooms: [],
    currentRoomId: null,
    currentPlayers: [],
    player: null,
    cable: null,
    roomSubscription: null,
    // End
  }

  componentDidMount() {
    fetch(roomsApiEndpoint)
    .then(r=>r.json())
    .then(rooms => this.setState({rooms}));
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

  // Max's StartScreen Methods
  setPlayer = (player) => {
    this.setState({player})
  }

  createPlayer = (newName) => {
    fetch(usersApiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newName,
        room_id: this.state.currentRoomId
      })
    })
    .then(r=>r.json())
    .then(player=>this.setState({player}, () => this.getPlayersInRoom()))
  }

  getPlayersInRoom = () => {
    console.log(`getting players in room ${this.state.currentRoomId}`)
    fetch(roomsApiEndpoint + `/${this.state.currentRoomId}/players`)
    .then(r=>r.json())
    .then(players=>{
      const pir = players.filter(p=>p.room_id === this.state.currentRoomId)
      this.setState({currentPlayers: pir, numberOfPlayers: pir.length}
      )}
    )
  }
  // END

  // This Stuff Renders Different Rooms

  setCurrentRoom = currentRoomId => {
    this.setState({ currentRoomId }, () => {
      this.cable = ActionCable.createConsumer("ws://localhost:4000/cable");
      const roomSubscription = this.cable.subscriptions.create(
        {
          channel: "RoomsChannel",
          room_id: this.state.currentRoomId
        },
        { received: data => console.log("The data is:", data) }
      );
      this.setState({ roomSubscription }, () => {
        console.log("I saved a reference to the subscription");
      });
    });
  }

  selectRoom() {
    return (
      <>
        <h1>Game rooms:</h1>
        <ul>
          {this.state.rooms.map(roomObj => (
            <li
              key={roomObj.id}
              onClick={() => this.setCurrentRoom(roomObj.id)}
            >
              {roomObj.name}
            </li>
          ))}
        </ul>
      </>
    );
  }

  currentRoom() {
    return (
      <>
        <p
          onClick={() => {
            this.cable.subscriptions.remove(this.state.roomSubscription);
            this.setState(
              { currentRoomId: null, roomSubscription: null },
              () => {
                console.log("I cleared the subscription");
              }
            );
          }}
        >
          Go back to rooms menu
        </p>
        <h1>Current room: {this.state.rooms.find(room => room.id === this.state.currentRoomId).name}</h1>
        {this.renderScreen()}
      </>
    );
  }

  // END

  renderScreen = () => {
    switch(this.state.currentScreen) {
      case 'StartScreen':
        return <StartScreen
                createPlayer={this.createPlayer}
                getPlayersInRoom={this.getPlayersInRoom}
                players={this.state.currentPlayers}
                numberOfPlayers={this.state.numberOfPlayers}
                />
      case 'Gamepage':
        return <Gamepage
                numberOfPlayers={this.state.numberOfPlayers}
                missionVoteResults={this.state.missionVoteResults}
                voteRound={this.state.voteRound}
                setVotesArray={this.setVotesArray}
              />
      case 'Game':
        return <Game playerNames={this.state.playerNames} />
      case 'Rules':
        return <Rules numberOfPlayers={this.state.numberOfPlayers} />
    }
  }

  render() {
    return (
      <div className="App">
        <>{!this.state.currentRoomId ? this.selectRoom() : this.currentRoom()}</>
      </div>
    );
  }
}

export default App;

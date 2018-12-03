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

class App extends Component {
  state = {
    currentScreen: 'StartScreen',
  }

  StartScreen = () => (<StartScreen switchScreen={this.switchScreen}/>)
  LobbyList = () => (<LobbyList />)
  Login = () => (<Login />)
  Lobby = () => (<Lobby />)

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={StartScreen} />
            <Route path="/join" component={LobbyList} />
            <Route path="/login" component={Login} />
            <Route path="/lobby" component={Lobby} />
          </div>
        </Router>
        <Gamepage/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Gameboard from './Gameboard'
import Playersdiv from './Playersdiv'

class Gamepage extends Component {
  state = {
    numPlayers: 5,
    voteRounds: [null, null, null, null, null],
    player: null,
    character: null,
    vote: null
  }

  render () {
    return(
    <div id="Gamepage">
      <h1>Gamepage</h1>
      <Gameboard numPlayers={this.state.numPlayers} voteRounds={this.state.voteRounds}/>
      <Playersdiv />
    </div>
  )}
}

export default Gamepage;

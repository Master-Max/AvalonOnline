import React, { Component } from 'react';
import Gameboard from './Gameboard'
import Playersdiv from './Playersdiv'
import VotePage from './VotePage'

class Gamepage extends Component {
  state = {
    playerID: 5,
    player: null,
    character: null,
    vote: null
  }

  switchPlayersButtons = () => {
    let numPlayers = this.props.numberOfPlayers
    let buttons = []
    for (let i = 0; i < numPlayers; i++) {
      buttons.push(<button id={`${i+1}`} onClick={(e) => this.switchPlayerID(e)}>Player {i+1}</button>)
    }
    return buttons
  }

  switchPlayerID = (e) => {
    this.setState({playerID: e.target.id})
    this.setState({vote: null})
  }

  setVoteState = (e) => {
    if (e.target.id === "yes") {
      this.setState({vote: "yes"})
      this.props.setVotesArray("yes", this.state.playerID)
    } else if (e.target.id === "no") {
      this.setState({vote: "no"})
      this.props.setVotesArray("no", this.state.playerID)
    }
  }

  renderVotePage = () => {
    if (this.props.voteRound) {
      if (this.state.vote) {
        return(<div> You Voted {this.state.vote} </div>)
      } else {
        return(<VotePage setVoteState={this.setVoteState} />)
      }
    }
  }

  render () {
    return(
    <div id="Gamepage">
      {this.switchPlayersButtons()}
      <h1>Gamepage</h1>
      <Gameboard numberOfPlayers={this.props.numberOfPlayers} missionVoteResults={this.props.missionVoteResults}/>
      <Playersdiv />
      {this.renderVotePage()}
    </div>
  )}
}

export default Gamepage;

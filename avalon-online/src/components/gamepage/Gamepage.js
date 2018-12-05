import React, { Component } from 'react';
import Gameboard from './Gameboard'
import Playersdiv from './Playersdiv'
import VotePage from './VotePage'

class Gamepage extends Component {
  constructor(props){
    super(props)
  }

  state = {
    playerID: 0,
    player: null,
    character: null,
    vote: null,
    showSecrets: false
  }

  switchPlayersButtons = () => {
    let numPlayers = this.props.numberOfPlayers
    let buttons = []
    for (let i = 0; i < numPlayers; i++) {
      buttons.push(<button id={`${this.props.players[i].id}`} onClick={(e) => this.switchPlayerID(e)}>{this.props.players[i].name}</button>)
    }
    return buttons
  }

  switchPlayerID = (e) => {
    if(e.target.id == this.state.playerID){
      this.setState({playerID: 0})
    }
    else {
      this.setState({playerID: e.target.id})
      this.setState({vote: null})
    }
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

  renderBaddies = () => {
    const baddies = this.props.players.filter(p=>p.team === 'evil')
    return(
      <>
        <h4>Team Evil:</h4>
        {baddies.map(b=><h5>{b.name}</h5>)}
      </>
    )
  }

  renderSecrets = () => {
    const player = this.props.players.find(p=>p.id == this.state.playerID)
    return(
      <>
        <h4>You Are {player.name}</h4>
        <h5>Your Team is {player.team}</h5>
        <h5>Your Role is {player.role}</h5>
        <hr />
        {player.team === 'evil' ? this.renderBaddies() : null}
      </>
    )
  }

  secretInfoPage = () => {

    if (this.state.playerID == 0){
      return(
        <>
          <h3>No Player Selected</h3>
        </>
      )
    }
    else {
      const player = this.props.players.find(p=>p.id == this.state.playerID)
      return(
        <>
          <h3>{player.name} Selected</h3>
          <button onClick={() => this.setState({showSecrets: !this.state.showSecrets})}>{!this.state.showSecrets ? "Show" : "Hide"} Secret Info</button>
          {!this.state.showSecrets ? <p>For {`${player.name}'s'`} Eyes Only</p> : this.renderSecrets()}
        </>
      )
    }
  }

  render () {
    return(
    <div id="Gamepage">
      {this.switchPlayersButtons()}
      {this.secretInfoPage()}
      <h1>Gamepage</h1>
      <Gameboard numberOfPlayers={this.props.numberOfPlayers} missionVoteResults={this.props.missionVoteResults}/>
      <Playersdiv />
      {this.renderVotePage()}
    </div>
  )}
}

export default Gamepage;

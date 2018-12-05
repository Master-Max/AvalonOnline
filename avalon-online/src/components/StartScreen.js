import React from 'react';
import Rules from './Rules.js'
import Gamepage from './gamepage/Gamepage.js'
import Game from './Game.js'

const API = 'http://localhost:4000'

class StartScreen extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      showRules: false,
      startGame: false,

      // AHHHHHH
      missionVoteResults: [null, null, null, null, null],
      voteRound: true,
      votesArray: [],
      missionNumber: 0
    }
  }

  componentDidMount() {
    this.props.getPlayersInRoom()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target.name.value;
    event.target.reset()
    this.props.createPlayer(name);
  }

  showRules = () => {
    console.log('Show Rules')
    const opp = !this.state.showRules
    this.setState({showRules: opp})
  }

  createGame = () => {

  }

  startGame = () => {
    // OLD
    console.log('Start Game')
    //

    fetch(API + '/games', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        player_number: this.props.numberOfPlayers,
        room_id: this.props.roomId
      })
    })
    .then(r=>r.json())
    .then(game=>this.setState({game: game, startGame: true}))
  }

  showGame = () => {
    this.setState({startGame: !this.state.startGame})
  }

  lobby() {
    return(
      <div>
        <h1>StartScreen</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input type="submit" value="Join" />
        </form>
        <ul>
          {this.props.players.map(p=><li>{p.name}</li>)}
        </ul>
        <button onClick={this.showRules}>Show Rules</button><br/>
        {this.state.showRules ? <Rules numberOfPlayers={this.props.numberOfPlayers}/> : <></>}<br/>
        <button onClick={this.startGame}>Start Game</button>
        <button onClick={this.showGame}>Show Game</button>
      </div>
    )
  }

  game() {
    return(
      <>
        <button onClick={this.showGame}>Back</button>
        <Gamepage
              numberOfPlayers={this.props.numberOfPlayers}
              missionVoteResults={this.state.missionVoteResults}
              voteRound={this.state.voteRound}
              setVotesArray={this.setVotesArray}
              players={this.props.players}
        />
      <Game playerNames={this.props.players.map(p=>p.name)} />
      </>
    )
  }

  render(){
    return(
      <>
        {!this.state.startGame ? this.lobby() : this.game()}
      </>
    )
  }
}

export default StartScreen;

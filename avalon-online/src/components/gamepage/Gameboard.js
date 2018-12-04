import React, { Component } from 'react';
import MissionCards from './MissionCards'
import VoteRounds from './VoteRounds'

const Gameboard = (props) => {

  const renderMissionCards = () => {
    return (<MissionCards numberOfPlayers={props.numberOfPlayers}/>)
  }

  const renderVoteRounds = () => {
    return props.missionVoteResults.map(round => {

      if (round === "pass") {
        return (<VoteRounds voteResult={round}/>)
      } else if (round === "fail") {
        return (<VoteRounds voteResult={round}/>)
      } else {
        return (<VoteRounds voteResult="TBD"/>)
      }
    })
  }

  return(
    <div id="Gameboard">
      <h1>Gameboard</h1>
        {renderMissionCards()}
        <div id="VoteRounds">
          {renderVoteRounds()}
        </div>
    </div>
  )
}

export default Gameboard;

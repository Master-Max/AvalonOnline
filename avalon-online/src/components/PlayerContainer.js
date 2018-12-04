import React from 'react';

import PlayerCard from './PlayerCard'

const PlayerContainer = (props) => {

  const playerMapper = () => {
    return props.playerNames.map((playerName, idx) => {
      return <PlayerCard key={idx} playerName={playerName} />
    })
  }

  return (
    <div
      className="player-container"
      style={{
        position: 'relative',
        height: '900px',
        overflow: 'scroll',
        marginBottom: '100px'
    }}>
      {playerMapper()}
    </div>
  )
}

export default PlayerContainer

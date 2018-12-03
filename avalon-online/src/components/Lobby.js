import React from 'react';

const Lobby = (props) => {

  const renderPlayers = () => (
    props.players.map(p => <p>{p}</p>)
  )

  return(
    <div>
      <h1>Lobby</h1>
      <h2>Players</h2>
      {renderPlayers()}
    </div>
  )
}

export default Lobby;

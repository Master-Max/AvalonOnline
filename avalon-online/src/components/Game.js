import React from 'react';

import PlayerContainer from './PlayerContainer';

const Game = (props) => {
  return(
    <div>
      <h1>Game</h1>
      <PlayerContainer playerNames={props.playerNames} />
    </div>
  )
}

export default Game;

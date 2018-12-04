import React, { Component } from 'react';

const MissionCards = (props) => {
  if (props.numPlayers === 5) {
    return(
      <div id="MissionCards">
        <span> 2 </span>
        <span> 3 </span>
        <span> 2 </span>
        <span> 3 </span>
        <span> 3 </span>
      </div>
    )
  }
}

export default MissionCards;

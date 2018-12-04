import React, { Component } from 'react';

const MissionCards = (props) => {
  switch (props.numberOfPlayers) {
    case 5:
      return(
          <div id="MissionCards">
            <span> 2 </span>
            <span> 3 </span>
            <span> 2 </span>
            <span> 3 </span>
            <span> 3 </span>
          </div>
        )
    case 6:
      return(
          <div id="MissionCards">
            <span> 2 </span>
            <span> 3 </span>
            <span> 4 </span>
            <span> 3 </span>
            <span> 4 </span>
          </div>
        )
    case 7:
      return(
          <div id="MissionCards">
            <span> 2 </span>
            <span> 3 </span>
            <span> 3 </span>
            <span> 4* </span>
            <span> 4 </span>
          </div>
        )
    case 8:
      return(
          <div id="MissionCards">
            <span> 3 </span>
            <span> 4 </span>
            <span> 4 </span>
            <span> 5* </span>
            <span> 5 </span>
          </div>
        )
    case 9:
      return(
          <div id="MissionCards">
            <span> 3 </span>
            <span> 4 </span>
            <span> 4 </span>
            <span> 5* </span>
            <span> 5 </span>
          </div>
        )
    case 10:
      return(
          <div id="MissionCards">
            <span> 3 </span>
            <span> 4 </span>
            <span> 4 </span>
            <span> 5 </span>
            <span> 5 </span>
          </div>
        )
  }
}

export default MissionCards;

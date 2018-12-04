import React, { Component } from 'react';

const VotePage = (props) => {
  return(
    <div>
    <h1>VotePage</h1>
    <button id="yes" onClick={(e) => props.setVoteState(e)} >Yes</button>
    <button id="no" onClick={(e) => props.setVoteState(e)}>No</button>
    </div>
  )
}

export default VotePage;

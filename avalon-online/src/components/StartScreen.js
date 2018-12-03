import React from 'react';
import LoginBar from './LoginBar.js'

const StartScreen = (props) => {
  console.log(props);

  const onStart = () => {
    console.log('To The Lobby');
  }

  const onJoin = () => {
    console.log('To The LobbyList');
  }

  const onLogin = () => {
    console.log('To The Login');
    window.location.pathname = '/login';
  }

  // Removed <LoginBar onClick={onLogin}/>

  return(
    <div>
      <h1>StartScreen</h1>
      <button onClick={onStart}>Create Game</button>
      <button onClick={onJoin}>Join Game</button>
    </div>
  )
}

export default StartScreen;

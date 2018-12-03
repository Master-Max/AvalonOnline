import React from 'react';
import LoginBar from './LoginBar.js'

const StartScreen = (props) => {
  console.log(props.switchScreen);

  const onStart = () => {
    console.log('To The Lobby');
    window.location.pathname = '/lobby';
  }

  const onJoin = () => {
    console.log('To The LobbyList');
    window.location.pathname = '/join';
  }

  const onLogin = () => {
    console.log('To The Login');
    window.location.pathname = '/login';
  }

  /*
  *     <LoginBar onClick={onLogin}/>
  *     <button onClick={onStart}>Create Game</button>
  *     <button onClick={onJoin}>Join Game</button>
  */


  return(
    <div>
      <h1>StartScreen</h1>
      <LoginBar onClick={onLogin}/>
      <button onClick={onStart}>Create Game</button>
      <button onClick={onJoin}>Join Game</button>
    </div>
  )
}

export default StartScreen;

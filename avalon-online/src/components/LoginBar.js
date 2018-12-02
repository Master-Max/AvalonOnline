import React from 'react';

const LoginBar = (props) => {
  return(
    <div>
      <hr />
      <h1>LoginBar</h1>
      <h2>You Are: Guest</h2>
      <button onClick={props.onClick}>Login</button>
      <hr />
    </div>
  )
}

export default LoginBar;

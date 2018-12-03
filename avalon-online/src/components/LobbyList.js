import React from 'react';

const LobbyList = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const code = e.target.code.value
    props.onJoinGame(code)
  }

  return(
    <div>
      <h1>LobbyList</h1>
      <hr/>
      <p>enter room code:</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="code" />
        <input type="submit" value="Join" />
      </form>
    </div>
  )
}

export default LobbyList;

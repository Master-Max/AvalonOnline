import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const PlayerCard = (props) => {

  return(
    <div className="player-card">
      <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' className="player-card-image"/>
        <Card.Content>
          <Card.Header>{props.playerName}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
        </Card.Content>
      </Card>
      <button >Yay</button>
      <button >Nay</button>
    </div>
  )
}

export default PlayerCard



// <Card.Content extra>
//   <a>
//     <Icon name='user' />
//     22 Friends
//   </a>
// </Card.Content>

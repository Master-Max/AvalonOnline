import React from 'react';

const Rules = (props) => {

  const setUpPlayers = () => {
    switch(props.numberOfPlayers) {
      case 5:
        return (
          <p className="rules-paragraph">With five players ready, the game begins with the random assignment of your Character cards - 3 of you will be Good, "Loyal Servants of Arthur", and 2 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
      case 6:
        return(
          <p className="rules-paragraph">With six players ready, the game begins with the random assignment of your Character cards - 4 of you will be Good, "Loyal Servants of Arthur", and 2 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
      case 7:
        return(
          <p className="rules-paragraph">With six players ready, the game begins with the random assignment of your Character cards - 4 of you will be Good, "Loyal Servants of Arthur", and 3 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
      case 8:
        return(
          <p className="rules-paragraph">With six players ready, the game begins with the random assignment of your Character cards - 5 of you will be Good, "Loyal Servants of Arthur", and 3 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
      case 9:
        return(
          <p className="rules-paragraph">With six players ready, the game begins with the random assignment of your Character cards - 6 of you will be Good, "Loyal Servants of Arthur", and 3 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
      case 10:
        return(
          <p className="rules-paragraph">With six players ready, the game begins with the random assignment of your Character cards - 6 of you will be Good, "Loyal Servants of Arthur", and 4 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
      default:
        return(
          <p className="rules-paragraph">To begin the game, you must have at least five players, at which point you will be randomly assigned your Character cards - 3 of you will be Good, "Loyal Servants of Arthur", and 2 will be Evil, "Minions of Mordred". All players on the side of Evil will know of one another; it is up to them to obfuscate and coordinate in order to ensure their side prevails, while those on the side of Good must see through the subterfuge and try to determine who is truly on their side.</p>
        )
    }
  }

  const questPlayers = () => {
    switch(props.numberOfPlayers) {
      case 6:
        return(
          <table className="table-styling">
            <tbody>
              <tr>
                <th>
                  <h3>Quest</h3>
                </th>
                <th>
                  <h3>1st Quest</h3>
                </th>
                <th>
                  <h3>2nd Quest</h3>
                </th>
                <th>
                  <h3>3rd Quest</h3>
                </th>
                <th>
                  <h3>4th Quest</h3>
                </th>
                <th>
                  <h3>5th Quest</h3>
                </th>
              </tr>
              <tr>
                <td>Players Needed</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>3</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        )
      case 7:
        return(
          <table className="table-styling">
            <tbody>
              <tr>
                <th>
                  <h3>Quest</h3>
                </th>
                <th>
                  <h3>1st Quest</h3>
                </th>
                <th>
                  <h3>2nd Quest</h3>
                </th>
                <th>
                  <h3>3rd Quest</h3>
                </th>
                <th>
                  <h3>4th Quest</h3>
                </th>
                <th>
                  <h3>5th Quest</h3>
                </th>
              </tr>
              <tr>
                <td>Players Needed</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
        )
      case 8:
        return(
          <table className="table-styling">
            <tbody>
              <tr>
                <th>
                  <h3>Quest</h3>
                </th>
                <th>
                  <h3>1st Quest</h3>
                </th>
                <th>
                  <h3>2nd Quest</h3>
                </th>
                <th>
                  <h3>3rd Quest</h3>
                </th>
                <th>
                  <h3>4th Quest</h3>
                </th>
                <th>
                  <h3>5th Quest</h3>
                </th>
              </tr>
              <tr>
                <td>Players Needed</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        )
      case 9:
        return(
          <table className="table-styling">
            <tbody>
              <tr>
                <th>
                  <h3>Quest</h3>
                </th>
                <th>
                  <h3>1st Quest</h3>
                </th>
                <th>
                  <h3>2nd Quest</h3>
                </th>
                <th>
                  <h3>3rd Quest</h3>
                </th>
                <th>
                  <h3>4th Quest</h3>
                </th>
                <th>
                  <h3>5th Quest</h3>
                </th>
              </tr>
              <tr>
                <td>Players Needed</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        )
      case 10:
        return(
          <table className="table-styling">
            <tbody>
              <tr>
                <th>
                  <h3>Quest</h3>
                </th>
                <th>
                  <h3>1st Quest</h3>
                </th>
                <th>
                  <h3>2nd Quest</h3>
                </th>
                <th>
                  <h3>3rd Quest</h3>
                </th>
                <th>
                  <h3>4th Quest</h3>
                </th>
                <th>
                  <h3>5th Quest</h3>
                </th>
              </tr>
              <tr>
                <td>Players Needed</td>
                <td>3</td>
                <td>4</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        )
      default:
        return(
          <table className="table-styling">
            <tbody>
              <tr>
                <th>
                  <h3>Quest</h3>
                </th>
                <th>
                  <h3>1st Quest</h3>
                </th>
                <th>
                  <h3>2nd Quest</h3>
                </th>
                <th>
                  <h3>3rd Quest</h3>
                </th>
                <th>
                  <h3>4th Quest</h3>
                </th>
                <th>
                  <h3>5th Quest</h3>
                </th>
              </tr>
              <tr>
                <td>Players Needed</td>
                <td>2</td>
                <td>3</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
        )
    }
  }

  return(
    <div className="rules-container">
      <h1>Rules</h1>
      <h3>Set Up</h3>
      {setUpPlayers()}
      <p className="rules-paragraph">Now that you have been assigned your Character cards, you may notice you are playing as either Merlin or the Assassin. Merlin is the only Good character who knows who is on the side of Evil. If you are playing as Merlin, it is up to you to inform your fellows who amidst the group is of nefarious intent. Be careful, however, for if you make yourself known to the Evil players, the Assassin can dispatch you at the end of the game, securing a victory for the Minions of Mordred.</p>
      <h3>Gameplay</h3>
      <p className="rules-paragraph">With the set up phase finished, you are now ready to play. The game consists of several rounds; each round has a Team Building phase and a Quest phase. The agents of Good triumph if three Quests are completed successfully and Merlin survives the Assassin's choice at the end of the game. Those of Evil succeed through their acts of sabotage - consecutively voting down five consecutive Team Building votes, ensuring the failure of any three Quests, or killing Merlin.</p>
      <h3>Team Building Phase</h3>
      <p className="rules-paragraph">At the beginning of the First Round, a Team Leader has been randomly selected. This player then chooses who they think should go on the current Quest. The Team Leader doesn't need to be a part of the Questing party. The number of players needed for each Quest is listed as follows:</p>
      {questPlayers()}
      <p className="rules-paragraph">Once the players have been selected for the Quest, everyone discusses the choice, and then votes 'Yay' or 'Nay' for the rest of the group to see. If the vote passes by a simple majority, you move on to the Quest phase. If the vote fails or is tied, the next player becomes Team Leader and the Team Building Phase begins anew. Note again that if five of these votes fail consecutively, the Evil players win the game.</p>
      <h3>Quest Phase</h3>
      <p className="rules-paragraph">Congratulations, the team has been selected and are now upon their Quest. The players selected must now determine the outcome. If you are on the side of Good, you can only do your best to ensure the success of the Quest. If you are on the side of Evil, you have a choice: further deceive your enemies by voting for the mission to succeed, or vote for its failure. The Quest succeeds if everyone has voted for its success.</p>
      <p className="rules-paragraph">Note: The 4th Quest (and only the 4th Quest) in games of 7 or more requires at least two Quest Fail votes to be a failed Quest.</p>
      <p className="rules-paragraph">That takes care of a full round. The game moves on to the next Quest and the next player becomes Team Leader to begin the Team Building phase anew.</p>
      <h3>Game End</h3>
      <p className="rules-paragraph">The game ends immediately after either three successful or three failed Quests. If three Quests were successes, the Evil players have one last chance to prevail - it is at this moment that they can reveal themselves and deliberate amongst themselves to identify Merlin. If they choose correctly, the Assassin eliminates Merlin and the Evil players win.</p>
    </div>
  )
}

export default Rules;

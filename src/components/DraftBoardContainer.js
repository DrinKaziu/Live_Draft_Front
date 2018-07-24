import React from 'react';
import { getPlayers } from '../api/railsAPI';
import DraftBoard from './DraftBoard';

class DraftBoardContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    getPlayers()
    .then(players => this.setState({
      players
    }))
  }

  // export searchOptions() {
  //   this.state.players.map(player => {
  //     return player
  //   })
  // }


  render() {
    return(
      <div>
        <DraftBoard
          players={this.state.players}
        />
      </div>
    )
  }
}

export default DraftBoardContainer;

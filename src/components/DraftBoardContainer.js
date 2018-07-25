import React from 'react';
import { getPlayers } from '../api/railsAPI';
import DraftBoard from './DraftBoard';
import PickNavBar from './PickNavBar';


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

  // searchOptions = () => {
  //   this.state.players.map(player =>
  //     console.log(player.name)
  //   )
  // }


  render() {
    console.log(this.state.players);
    return(
      <div>
        <PickNavBar
          players={this.state.players}
        />
        <DraftBoard
          players={this.state.players}
        />
      </div>
    )
  }
}

export default DraftBoardContainer;

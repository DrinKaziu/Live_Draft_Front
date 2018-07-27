import React from 'react';
import { getPlayers } from '../api/railsAPI';
import { connect } from 'react-redux';
import DraftBoard from './DraftBoard';
import PickNavBar from './PickNavBar';


class DraftBoardContainer extends React.Component {

  componentDidMount() {
    getPlayers()
    .then(players => {
      this.props.dispatch({
        type: 'GET_PLAYERS',
        payload: players
      })
      // this.setState({players})
    })
  }

  render() {
    console.log(this.props);
    // console.log(this.state.players);
    return(
      <div>
        <PickNavBar players={this.props.players}/>
        <DraftBoard players={this.props.players}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {players: state.players}
}

// function mapDispatchToProps(dispatch) {
//   return {}
// }

export default connect(mapStateToProps)(DraftBoardContainer);

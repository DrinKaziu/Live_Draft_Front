import React from 'react';
import { createPick, createTeam } from '../api/railsAPI';
import { connect } from 'react-redux';
import DraftBoard from './DraftBoard';
import CreateLeagueForm from './CreateLeagueForm';



class DraftBoardContainer extends React.Component {




  handleCreatePick = (teamId, player) => {
    createPick(teamId, player)
    .then( pick => {
      this.props.dispatch({
        tyep: 'CREATE_PICK',
        payload: pick
      })
    })
    .catch(e => console.log('err', e))
  }

  handleCreateTeam = (name, position) => {
    createTeam(name, position)
    .then( team => {
      this.props.dispatch({
        type: 'CREATE_TEAM',
        payload: team
      })
    })
    .catch(e => console.log('error', e))
    // .then( () => this.props.history.push('/teams'))
  }

  render() {
    return(
      <div>
        <CreateLeagueForm
          handleCreateTeam={this.handleCreateTeam}
        />
        <DraftBoard
          players={this.props.players}
          teams={this.props.teams}
          handleSelectPlayer={this.handleSelectPlayer}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    teams: state.teams,
    picks: state.picks
  }
}


export default connect(mapStateToProps)(DraftBoardContainer);

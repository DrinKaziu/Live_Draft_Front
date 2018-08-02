import React from 'react';
import { createTeam, createPick } from '../api/railsAPI';
import { connect } from 'react-redux';
import DraftBoard from './DraftBoard';
import CreateLeagueForm from './CreateLeagueForm';



class DraftBoardContainer extends React.Component {


  handleCreateTeam = (name) => {
    createTeam(name)
    .then( team => {
      this.props.dispatch({
        type: 'CREATE_TEAM',
        payload: team
      })
    })
    .catch(e => console.log('error', e))
    // .then( () => this.props.history.push('/teams'))
  }

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

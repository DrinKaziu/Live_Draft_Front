import React from 'react';
import { createTeam, createJoin } from '../api/railsAPI';
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
    .then( () => this.props.history.push('/teams'))
    .catch(e => console.log('error', e))
  }

  handleSelectPlayer = (player, teamId) => {
    createJoin(player, teamId)
    .then( updatedTeam => {
      const newTeams = this.props.teams.map( t => {
          if (t.id === updatedTeam.id ) {
            return updatedTeam
          } else {
            return t
          }
        })
        this.props.dispatch({
          type: 'SELECT_PLAYER',
          payload: newTeams
        })
      }
    )
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


export default DraftBoardContainer;

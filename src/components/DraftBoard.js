import React from 'react';
import _ from 'lodash';
import PlayerList from './PlayerList';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPicks } from '../api/railsAPI'



class DraftBoard extends React.Component {

  componentDidMount() {
    getPicks()
    .then(picks => {
      this.props.dispatch({
        type: 'GET_PICKS',
        payload: picks
      })
    })
  }


  render() {

    const {teams} = this.props

    let round = 0
    let totalPicks = 0

    const numRounds = _.times(10, i => (
      <Table.Row className="trow" key={i}>
        <Table.Cell collapsing className="round">ROUND {round += 1}</Table.Cell>
        {teams.map(team => {
          totalPicks+=1
          return team.picks[round - 1] !== undefined ?
            <Table.Cell className={team.picks[round - 1].position}>
              <div className="playerPos">{team.picks[round - 1].position}</div>
              <div className="playerBye">({team.picks[round - 1].byeWeek})</div>
              <div className="playerTeam">{team.picks[round - 1].team}</div>
              <div className="playerFName">{team.picks[round - 1].fname}</div>
              <div className="playerLName">{team.picks[round - 1].lname}</div>
            </Table.Cell>
            :
            <Table.Cell>
              <div className="roundInCell">round {round}</div>
              <div className="pickNumber">{totalPicks}</div>
            </Table.Cell>
        })}
      </Table.Row>
    ))


    return(
      <div>
        <PlayerList players={this.props.players}/>
        <Table fixed compact celled definition columns={teams.length + 1}>
          <Table.Header className="theader">
            <Table.Row>
              <Table.HeaderCell />
              {teams.map(team => (
                <Table.HeaderCell>{team.name}</Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body fixed='true'>
            {numRounds}
          </Table.Body>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams,
    picks: state.picks,
    currentTeam: state.currentTeam
  }
}

export default connect(mapStateToProps)(DraftBoard);

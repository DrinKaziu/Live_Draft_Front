import React from 'react';
import _ from 'lodash';
import PlayerList from './PlayerList';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';



class DraftBoard extends React.Component {

  render() {

    const {teams} = this.props
    let round = 0
    let pick = 0
    const numRounds = _.times(10, i => (
      <Table.Row className="trow" key={i}>
        <Table.Cell collapsing className="round">ROUND {round += 1}</Table.Cell>
        {teams.map(team => (
          <Table.Cell>
            <div className="roundInCell">round {round}</div>
            <div className="pickNumber">{pick += 1}</div>
          </Table.Cell>
        ))}
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
  return {teams: state.teams}
}

export default connect(mapStateToProps)(DraftBoard);

{/* <Table.Cell positive>
  <div className="playerPos">QB</div>
  <div className="playerBye">(4)</div>
  <div className="playerTeam">WAS</div>
  <div className="playerFName">Alex</div>
  <div className="playerLName">Smith</div>
</Table.Cell> */}

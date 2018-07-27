import React from 'react';
import PlayerList from './PlayerList';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';



class DraftBoard extends React.Component {


  render() {

    const {teams} = this.props

    console.log(this.props);

    // const numOfRounds = 15
    // const rounds = []
    // for (let i = 0; i < numOfRounds; i++) {
    //   rounds.push(
    //     <Table.Row className="trow">
    //       <Table.Cell collapsing className="round">1</Table.Cell>
    //         {teams.map(team => (
    //           <Table.Cell></Table.Cell>
    //         ))}
    //       </Table.Row>
    //     </Table.Row>
    //   )
    //   return rounds
    // }


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

          <Table.Body fixed>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">1</Table.Cell>
              {teams.map(team => (
                <Table.Cell positive>
                  <div className="playerPos">QB</div>
                  <div className="playerBye">(4)</div>
                  <div className="playerTeam">WAS</div>
                  <div className="playerFName">Alex</div>
                  <div className="playerLName">Smith</div>
                </Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">2</Table.Cell>
              {teams.map(team => (
                <Table.Cell>
                  <div className="roundInCell">round 2</div>
                  <div className="pickNumber">11</div>
                </Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">3</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">4</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">5</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">6</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">7</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">8</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">9</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">10</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">11</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">12</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">13</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">14</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">15</Table.Cell>
              {teams.map(team => (
                <Table.Cell></Table.Cell>
              ))}
            </Table.Row>

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

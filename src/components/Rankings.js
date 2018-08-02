import React from 'react';
import { Grid, Segment, Table } from 'semantic-ui-react'

class Rankings extends React.Component {

  render() {

    const {players} = this.props

    const QBs = players.filter(p => p.position === 'QB')
    const RBs = players.filter(p => p.position === 'RB')
    const WRs = players.filter(p => p.position === 'WR')
    const TEs = players.filter(p => p.position === 'TE')
    const Ks  = players.filter(p => p.position === 'K')
    const DEF = players.filter(p => p.position === 'DEF')

    return(
      <Grid columns={3} divided>
        <Grid.Row stretched>
          <Grid.Column largeScreen='6'>
            <Segment>
              <h3>All Players</h3>
              <Table className='all_player_table' color='grey' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row >
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>Pos Rank</Table.HeaderCell>
                    <Table.HeaderCell>Bye Week</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                    {this.props.players.map(p => (
                      <Table.Row key={p.id}>
                        <Table.Cell>{p.displayName}</Table.Cell>
                        <Table.Cell>{p.position}</Table.Cell>
                        <Table.Cell>{p.team}</Table.Cell>
                        <Table.Cell>{p.overallRank}</Table.Cell>
                        <Table.Cell>{p.positionRank}</Table.Cell>
                        <Table.Cell>{p.byeWeek}</Table.Cell>
                      </Table.Row>
                    ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
          <Grid.Column largeScreen='5'>
            <Segment>
              <h3>Quarterbacks</h3>
              <Table className='pos_table' color='green' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>PosRnk</Table.HeaderCell>
                    <Table.HeaderCell>Bye</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {QBs.map(qb => (
                    <Table.Row key={qb.id}>
                      <Table.Cell>{qb.displayName}</Table.Cell>
                      <Table.Cell>{qb.position}</Table.Cell>
                      <Table.Cell>{qb.team}</Table.Cell>
                      <Table.Cell>{qb.overallRank}</Table.Cell>
                      <Table.Cell>{qb.positionRank}</Table.Cell>
                      <Table.Cell>{qb.byeWeek}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
            <Segment>
              <h3>Wide Receivers</h3>
              <Table className='pos_table' color='yellow' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>PosRnk</Table.HeaderCell>
                    <Table.HeaderCell>Bye</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {WRs.map(wr => (
                    <Table.Row key={wr.id}>
                      <Table.Cell>{wr.displayName}</Table.Cell>
                      <Table.Cell>{wr.position}</Table.Cell>
                      <Table.Cell>{wr.team}</Table.Cell>
                      <Table.Cell>{wr.overallRank}</Table.Cell>
                      <Table.Cell>{wr.positionRank}</Table.Cell>
                      <Table.Cell>{wr.byeWeek}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
            <Segment>
              <h3>Kickers</h3>
              <Table className='pos_table' color='grey' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>PosRnk</Table.HeaderCell>
                    <Table.HeaderCell>Bye</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {Ks.map(k => (
                    <Table.Row key={k.id}>
                      <Table.Cell>{k.displayName}</Table.Cell>
                      <Table.Cell>{k.position}</Table.Cell>
                      <Table.Cell>{k.team}</Table.Cell>
                      <Table.Cell>{k.overallRank}</Table.Cell>
                      <Table.Cell>{k.positionRank}</Table.Cell>
                      <Table.Cell>{k.byeWeek}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
          <Grid.Column largeScreen='5'>
            <Segment>
              <h3>Runningbacks</h3>
              <Table className='pos_table' color='red' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>PosRnk</Table.HeaderCell>
                    <Table.HeaderCell>Bye</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {RBs.map(rb => (
                    <Table.Row key={rb.id}>
                      <Table.Cell>{rb.displayName}</Table.Cell>
                      <Table.Cell>{rb.position}</Table.Cell>
                      <Table.Cell>{rb.team}</Table.Cell>
                      <Table.Cell>{rb.overallRank}</Table.Cell>
                      <Table.Cell>{rb.positionRank}</Table.Cell>
                      <Table.Cell>{rb.byeWeek}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
            <Segment>
              <h3>Tight Ends</h3>
              <Table className='pos_table' color='blue' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>PosRnk</Table.HeaderCell>
                    <Table.HeaderCell>Bye</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {TEs.map(te => (
                    <Table.Row key={te.id}>
                      <Table.Cell>{te.displayName}</Table.Cell>
                      <Table.Cell>{te.position}</Table.Cell>
                      <Table.Cell>{te.team}</Table.Cell>
                      <Table.Cell>{te.overallRank}</Table.Cell>
                      <Table.Cell>{te.positionRank}</Table.Cell>
                      <Table.Cell>{te.byeWeek}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
            <Segment>
              <h3>Defense</h3>
              <Table className='pos_table' color='purple' sortable celled padded size='large'>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Player</Table.HeaderCell>
                    <Table.HeaderCell>Position</Table.HeaderCell>
                    <Table.HeaderCell>Team</Table.HeaderCell>
                    <Table.HeaderCell>Rank</Table.HeaderCell>
                    <Table.HeaderCell>PosRnk</Table.HeaderCell>
                    <Table.HeaderCell>Bye</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {DEF.map(def => (
                    <Table.Row key={def.id}>
                      <Table.Cell>{def.displayName}</Table.Cell>
                      <Table.Cell>{def.position}</Table.Cell>
                      <Table.Cell>{def.team}</Table.Cell>
                      <Table.Cell>{def.overallRank}</Table.Cell>
                      <Table.Cell>{def.positionRank}</Table.Cell>
                      <Table.Cell>{def.byeWeek}</Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default Rankings;

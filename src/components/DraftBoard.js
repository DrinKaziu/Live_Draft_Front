import React from 'react';
import PlayerList from './PlayerList';
import { Table } from 'semantic-ui-react';



class DraftBoard extends React.Component {


  render() {
    return(
      <div>
        <PlayerList players={this.props.players}/>
        <Table compact celled definition>
          <Table.Header className="theader">
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Team #1</Table.HeaderCell>
              <Table.HeaderCell>Team #2</Table.HeaderCell>
              <Table.HeaderCell>Team #3</Table.HeaderCell>
              <Table.HeaderCell>Team #4</Table.HeaderCell>
              <Table.HeaderCell>Team #5</Table.HeaderCell>
              <Table.HeaderCell>Team #6</Table.HeaderCell>
              <Table.HeaderCell>Team #7</Table.HeaderCell>
              <Table.HeaderCell>Team #8</Table.HeaderCell>
              <Table.HeaderCell>Team #9</Table.HeaderCell>
              <Table.HeaderCell>Team #10</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">1
              </Table.Cell>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>3</Table.Cell>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>6</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>8</Table.Cell>
              <Table.Cell>9</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">2
              </Table.Cell>
              <Table.Cell>20</Table.Cell>
              <Table.Cell>19</Table.Cell>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>17</Table.Cell>
              <Table.Cell>16</Table.Cell>
              <Table.Cell>15</Table.Cell>
              <Table.Cell>14</Table.Cell>
              <Table.Cell>13</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>11</Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">3
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">4
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">5
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">6
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">7
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">8
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">9
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">10
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">11
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">12
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">13
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">14
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row className="trow">
              <Table.Cell collapsing className="round">15
              </Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    )
  }
}

export default DraftBoard;

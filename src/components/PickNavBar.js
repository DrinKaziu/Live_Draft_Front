import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Button, Dropdown, Step, Icon } from 'semantic-ui-react';
import { createPick } from '../api/railsAPI';


class PickNavBar extends React.Component {
  state = {
    activeTab: 'Board',
    searchQuery: '',
    value: '',
    toggle: false,
    currentTeamId: 3,
    lastTeamId: '',
    onDeckId: ''
  }

  //Menu Tabs
  handleTabClick = (e, { name }) => this.setState({ activeTab: name })

  //Search Dropdown
  handleChange = (e, { searchQuery, value }) => this.setState({ searchQuery: '', value })
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })


  nextUp = () => {
    if (this.state.currentTeamId < 22 && this.state.toggle === false) {
      this.setState(prevState => (
        {
          currentTeamId: prevState.currentTeamId + 1,
          lastTeamId: prevState.currentTeamId,
          onDeckId: prevState.currentTeamId+2
        }
      ))
    } else if (this.state.currentTeamId > 13 && this.state.toggle === true) {
      this.setState(prevState => (
        {
          currentTeamId: prevState.currentTeamId - 1,
          lastTeamId: prevState.currentTeamId,
          onDeckId: prevState.currentTeamId - 2
        }
      ))
    } else if (this.state.currentTeamId === 22){
      this.setState({toggle: !this.state.toggle})
    } else if (this.state.currentTeamId === 13) {
      this.setState({toggle: !this.state.toggle})
    }
  }

  handlePick = () => {
    this.nextUp()
    createPick(this.state.currentTeamId, this.state.value)
    .then( pick => {
      this.props.dispatch({type: 'CREATE_PICK', payload: {
        pick: pick
      }})
    })
  }

  // handleDeletePick = () => {
  //   deletePick(this.state.currentTeamId, this.state.value)
  //   .then(console.log())
  // }


  render() {
    console.log(this.state.lastTeamId);
    const { activeTab, searchQuery, value } = this.state

    const currentPick = this.props.teams.find(team => team.id === this.state.currentTeamId)
    let currentPickName = currentPick ? currentPickName = currentPick.name : null
    const lastPick = this.props.teams.find(team => team.id === this.state.lastTeamId)
    let lastPickName = lastPick ? lastPickName = lastPick.name : null
    const onDeckPick = this.props.teams.find(team => team.id === this.state.onDeckId)
    let onDeckPickName = onDeckPick ? onDeckPickName = onDeckPick.name : null

    const players = this.props.players.map(p => {
      return {key: p.id, value: p.id, text: `${p.overallRank}. ${p.fname} ${p.lname} (${p.position}-${p.team})`}
    })

    return(
      <Menu tabular>
        <Menu.Item as={ Link } name='Board' exact='true' to='/board' active={activeTab === 'Board'} onClick={this.handleTabClick} />
        <Menu.Item as={ Link } name='Rankings' exact='true' to='/rankings' active={activeTab === 'Rankings'} onClick={this.handleTabClick} />
        <Step.Group size='mini' fluid>
          <Step>
            <Step.Content>
              <Step.Title>Last Pick: {lastPickName}</Step.Title>
            </Step.Content>
            <Icon onClick={this.handleDeletePick} className='undo_icon' name='undo alternate' color='red'/>
          </Step>
          <Step active>
            <Step.Content>
              <Step.Title>{currentPickName}
                <Dropdown
                  className='dropdown'
                  compact
                  deburr
                  onChange={this.handleChange}
                  onSearchChange={this.handleSearchChange}
                  options={players}
                  placeholder='Your pick... '
                  search
                  searchQuery={searchQuery}
                  selection
                  value={value}
                />
                <Button
                  size='tiny'
                  color='google plus'
                  value={value}
                  onClick={this.handlePick}
                  >DRAFT
                </Button>
              </Step.Title>
            </Step.Content>
          </Step>
          <Step disabled>
            <Step.Content>
              <Step.Title>On Deck: {onDeckPickName}</Step.Title>
            </Step.Content>
          </Step>
        </Step.Group>
        <Menu.Item>
          <Dropdown simple icon='bars' fluid compact direction='left'>
            <Dropdown.Menu>
              <Dropdown.Item as={ Link } to='/setup'>League Setup</Dropdown.Item>
              <Dropdown.Item>Clear Board</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams,
    picks: state.picks
  }
}



export default connect(mapStateToProps)(PickNavBar);

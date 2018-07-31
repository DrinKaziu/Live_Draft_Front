import React from 'react';
import { Link } from 'react-router-dom'
import { Menu, Button, Dropdown } from 'semantic-ui-react';




class PickNavBar extends React.Component {
  state = {
    activeTab: 'Board',
    searchQuery: '',
    value: ''
  }

  //Menu Tabs
  handleTabClick = (e, { name }) => this.setState({ activeTab: name })

  //Search Dropdown
  handleChange = (e, { searchQuery, value }) => this.setState({ searchQuery: '', value })
  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  //Draft Button
  handleButtonClick = (e) => this.setState({searchQuery: ''})
  // handleButtonClick = (e) => {
  //   this.props.handleSelectPlayer(this.props.player, this.state.value)
  // }
  // handleSelectionChange = (e) => {
  //   this.setState({
  //     value: e.target.value
  //   })
  // }

  render() {
    const { activeTab, searchQuery, value } = this.state
    const players = this.props.players.map(p => {
      return {key: p.id, value: p.displayName, text: `${p.overallRank}. ${p.fname} ${p.lname} (${p.position}-${p.team})`}
    })

    return(
      <Menu tabular>
          <Menu.Item as={ Link } name='Board' exact='true' to='/board' active={activeTab === 'Board'} onClick={this.handleTabClick} />
          <Menu.Item as={ Link } name='Rankings' exact='true' to='/rankings' active={activeTab === 'Rankings'} onClick={this.handleTabClick} />
        <Dropdown
          className='dropdown'
          compact
          deburr
          fluid
          multiple
          onChange={this.handleChange}
          onSearchChange={this.handleSearchChange}
          options={players}
          placeholder='Your pick... '
          search
          searchQuery={searchQuery}
          selection
          value={value}
        />
        <Menu.Item>
          <Button
            color='google plus'
            value={this.state.value}
            onClick={this.handleButtonClick}
            >DRAFT
          </Button>
        </Menu.Item>
      </Menu>
    )
  }
}




export default PickNavBar;

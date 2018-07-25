import React from 'react';
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

  render() {
    const { activeTab, searchQuery, value } = this.state

    const players = this.props.players.map(p => {
      return {key: p.id, value: p.id, text: `${p.fname} ${p.lname} (${p.position}-${p.team})`}
    })

    return(
      <Menu tabular>
        <Menu.Item name='Board' active={activeTab === 'Board'} onClick={this.handleTabClick} />
        <Menu.Item name='Rankings' active={activeTab === 'Rankings'} onClick={this.handleTabClick} />
        <Menu.Item>
          <Button color="google plus" >DRAFT</Button>
        </Menu.Item>
        <Dropdown
          className="dropdown"
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
      </Menu>
    )
  }
}




export default PickNavBar;

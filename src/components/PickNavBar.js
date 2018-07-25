import React from 'react';
import { Menu, Button, Dropdown } from 'semantic-ui-react';




class PickNavBar extends React.Component {
  state = {
    activeItem: 'Board',
    searchQuery: ''
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleChange = (e, { searchQuery, value }) => this.setState({ searchQuery, value })

  handleSearchChange = (e, { searchQuery }) => this.setState({ searchQuery })

  render() {
    const { activeItem, searchQuery, value } = this.state

    const players = this.props.players.map(p => {
      return {key: p.id, text: `${p.fname} ${p.lname} (${p.position}-${p.team})`}
    })

    return(
      <Menu tabular>
        <Menu.Item name='Board' active={activeItem === 'Board'} onClick={this.handleItemClick} />
        <Menu.Item name='Rankings' active={activeItem === 'Rankings'} onClick={this.handleItemClick} />
        <Menu.Item>
          <Button color="google plus" >DRAFT</Button>
        </Menu.Item>
        <Dropdown
          className="dropdown"
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

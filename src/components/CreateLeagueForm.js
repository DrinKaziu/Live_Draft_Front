import React from 'react';
import { Form, Button } from 'semantic-ui-react';

class CreateLeagueForm extends React.Component {

  constructor(props) {
    super()
    this.state = {
      teamName: '',
      position: '',
      inputField: ''
    }
  }

  newTeamName = (e) => {
    this.setState({teamName: e.target.value})
  }

  position = (e) => {
    this.setState({position: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCreateTeam(this.state.teamName, this.state.position)
    this.setState({inputField: ''})
  }

  createNewTeam = () => {
    if(!this.state.inputField) {
      this.setState({
        inputField:
        <Form size='tiny' onSubmit={this.handleSubmit}>
          <Form.Field width='6' size='medium'>
            <Form.Group widths='equal'>
              <input fluid='true' label='Team Name' placeholder='Team Name' onChange={this.newTeamName}/>
              <input fluid='true' label='Position' placeholder='Position' onChange={this.position}/>
            </Form.Group>
          </Form.Field>
          <Button basic color='green' type='submit' size='tiny'>Submit</Button>
          <Button basic color='red' type='submit' size='tiny' onClick={this.createNewTeam}>Cancel</Button>
        </Form>
      })
    } else {
      this.setState({inputField: ''})
    }
  }

  render() {
    if(!this.state.inputField) {
      return(
        <div>
          <Button basic color='green' onClick={this.createNewTeam}>
            Add Team
          </Button>
        </div>
      )
    } else {
      return(
        <div>
          {this.state.inputField}
        </div>
      )
    }
  }
}

export default CreateLeagueForm;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { getPlayers, getTeams } from './api/railsAPI';
import { connect } from 'react-redux';
import './App.css';
import PickNavBar from './components/PickNavBar';
import DraftBoardContainer from './components/DraftBoardContainer';
import Rankings from './components/Rankings';




class App extends Component {

  componentDidMount() {
    getPlayers()
    .then(players => {
      this.props.dispatch({
        type: 'GET_PLAYERS',
        payload: players
      })
      // this.setState({players})
    })
    getTeams()
    .then(teams => {
      this.props.dispatch({
        type: 'GET_TEAMS',
        payload: teams
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <PickNavBar players={this.props.players}/>
          <Route exact path='/board' component={DraftBoardContainer}/>
          <Route exact path='/rankings' render={(props) => (<Rankings players={this.props.players} />)} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    teams: state.teams
  }
}

export default connect(mapStateToProps)(App);

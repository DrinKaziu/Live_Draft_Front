import React, { Component } from 'react';
import './App.css';
// import PickNavBar from './components/PickNavBar';
import DraftBoardContainer from './components/DraftBoardContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DraftBoardContainer />
      </div>
    );
  }
}

export default App;

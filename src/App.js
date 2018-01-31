import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chat from './components/Chat/Chat';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Chat/>
      </div>
    );
  }
}

export default connect(
  state => state,
  null
)(App);

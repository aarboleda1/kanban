import React, { Component } from 'react';
import Header from './components/Header';
import Board from './components/Board';

import './stylesheets/main.css';

class App extends Component {
  render() {
    return (
      <div className="o-layout">
				<Header/>
				<Board/>
      </div>
    );
  }
}

export default App;

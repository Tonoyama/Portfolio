import React, { Component } from 'react';
import './App.css';
import './index.css'

import { Navigation, Main } from './components';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Main />
        </header>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Todos from './components/Todos';
import './interface/css/general.css';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
         <Todos />
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Tablehead from './Tablehead';
import Tablerow from './Tablerow';
import 'pure-css';



class App extends Component {
  render() {
    return (
      <table className="pure-table">
        <Tablehead />
        <tbody>
          <Tablerow />
        </tbody>
      </table>
    )
  }
}

export default App;


import React, { Component } from 'react';
import 'pure-css';



class App extends Component {
  render() {
    return (
      <table className="pure-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
      </thead>

      <tbody>
          <tr>
            <td>1</td>
            <td>Honda</td>
            <td>Accord</td>
            <td>2009</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default App;


import React, { Component } from 'react';

export default class Tablerow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>Honda</td>
        <td>Accord</td>
        <td>2009</td>
      </tr>
    )
  }
}


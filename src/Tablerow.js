import React, { Component } from 'react';

export default class Tablerow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.position}</td>
        <td>{this.props.username}</td>
        <td>{this.props.alltime}</td>
        <td>{this.props.recent}</td>
      </tr>
    )
  }
}


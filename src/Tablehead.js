import React, { Component } from 'react';

export default class Tablehead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>All-time Score</th>
          <th>Last 30 days</th>
        </tr>
      </thead>
    )
  }
}


import React, { Component } from 'react';

export default class Tablehead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
      </thead>
    )
  }
}


import React, { Component } from 'react';

export default class Tablehead extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th onClick={this.props.onChange.bind(this, 'alltime')}>All-time Score</th>
          <th onClick={this.props.onChange.bind(this, 'recent')}>Last 30 days</th>
        </tr>
      </thead>
    )
  }
}


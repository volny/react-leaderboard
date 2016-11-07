import React, { Component } from 'react';
import Tablehead from './Tablehead';
import Tablerow from './Tablerow';
import 'pure-css';



export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => response.json())
      .then((json) => this.setState({
        data: json
    }))
  }


  render() {
    const rows = this.state.data.map((row, index) =>
      <Tablerow
        position={index + 1}
      />)

    return (
      <table className="pure-table">
        <Tablehead />
        <tbody>
          { rows }
        </tbody>
      </table>
    )
  }
}


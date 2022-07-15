import React, { Component } from 'react'
import Nav from "../Nav/Nav";

export class Characters extends Component {

    constructor(props) {
        super(props)
        this.state = []
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => data.results)
        .then(info => this.setState([...info]))
    }

  render() {
    return (
        <div>
        <Nav />
        Characters
      </div>
    )
  }
}

export default Characters

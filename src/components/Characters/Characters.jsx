import React, { Component } from 'react'
import Nav from "../Nav/Nav";
import Card from '../Card/Card';

export class Characters extends Component {

  constructor(props) {
    super(props)
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => data.results)
      .then(info => this.setState({
        characters: info
      }))
  }

  render() {
    return (
      <div>
        <Nav />
        <div>
          Character
          {
            this.state.characters.map(e => <Card
              name={e.name}
              image={e.image}
              gender={e.gender}
            />
            )
          }
        </div>
      </div>
    )
  }
}

export default Characters

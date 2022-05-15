import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
      .then((res) => res.json())
      .then((pokemon) => this.setState({pokemon}))
  }

  setSearchTerm = e => {
    this.setState({searchTerm: e.target.value.toLowerCase()})
  }

  addPokemon = newPokemon => {
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: newPokemon.name,
        hp: newPokemon.hp,
        sprites: {
          front: newPokemon.frontUrl,
          back: newPokemon.backUrl
        }
      })
    })
      .then((res) => res.json())
      .then((pokemon) => {
        this.setState({pokemon: [...this.state.pokemon, pokemon]})
    })
  } 

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search setSearchTerm={this.setSearchTerm} />
        <br />
        <PokemonCollection pokemon={this.state.pokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(this.state.searchTerm))} />
      </Container>
    )
  }
}

export default PokemonPage

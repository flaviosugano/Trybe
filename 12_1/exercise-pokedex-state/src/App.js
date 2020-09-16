import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor() {
    super()
    this.nextPokemon = this.nextPokemon.bind(this)

    this.state = {
      position: 0
    }
  }

  nextPokemon() {
    this.setState((previous, _props) => {
      if (previous.position < pokemons.length - 1) {
        return { position: previous.position + 1 }
      } return { position: 0 }
    })
  }

  render() {
    let index = this.state.position;
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <button onClick={this.nextPokemon}>Next {'>>'}</button>
        <Pokedex pokemon={pokemons[index]} />
        <div className="filterButtons">
          <div className="typeButton">Fire</div>
          <div className="typeButton">Psychic</div>
        </div>
      </div>
    );
  }
}

export default App;
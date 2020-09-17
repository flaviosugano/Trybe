import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.nextPokemon = this.nextPokemon.bind(this)
    this.typeSelect = this.typeSelect.bind(this)

    this.state = {
      position: 0,
      type: 'Fire'
    }
  }

  nextPokemon(pokemonList) {
    this.setState((previous, _props) => {
      if (previous.position < pokemonList.length - 1) {
        return { position: previous.position + 1 }
      } return { position: 0 }
    })
  }

  typeSelect(event) {
    const choosenType = event.target.id;
    this.setState((previous) => ({
      type: choosenType
    }));
  }

  render() {
    const { pokemons } = this.props;
    const { position } = this.state;
    const currentTypeList = pokemons.filter(poke => poke.type === this.state.type);
    const pokemon = currentTypeList[position];

    return (
      <div>
        <button onClick={() => this.nextPokemon(currentTypeList)}>Next {'>>'}</button>
        <div className="pokedex">
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        </div>
        <div className="filterButtons">
          <div className="typeButton" id="Fire" onClick={this.typeSelect}>Fire</div>
          <div className="typeButton" id="Psychic" onClick={this.typeSelect}>Psychic</div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
import React from "react";
import { PokemonIndexItem } from "./pokemon_index_item";
import { Route, HashRouter } from 'react-router-dom';
import PokemonDetailContainer from "./pokemon_detail_container";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const pokemons = this.props.pokemon.map(poke => (
      <PokemonIndexItem poke={poke}/>
    ));

    return (
      <div>
        <ul>
          { pokemons }
        </ul>
        <HashRouter>
          <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        </HashRouter>
      </div>
    );
  }


  componentDidMount() {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;

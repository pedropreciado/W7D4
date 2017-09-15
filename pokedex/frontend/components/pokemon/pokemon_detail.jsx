import React from "react";
import ItemDetailContainer from "./item_detail_container";

class PokemonDetail extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestOnePokemon(this.props.match.params.pokemonId);
    console.log(this.props);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestOnePokemon(newProps.match.params.pokemonId);
    }

    // console.log(newProps);
    // console.log("----");
    // console.log(this.props);
  }

  render() {
    const pokemon = this.props.pokemon;
    const allItems = this.props.items.map(item => (
      <ItemDetailContainer itemId={item.id}/>
    ));


    if (pokemon === undefined) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div>
        <h2>{pokemon.name}</h2>
        <p><img src={pokemon.image_url} /></p>
        <p>Type: {pokemon.poke_type}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>Moves: {pokemon.moves.join(", ")}</p>
        <p>Items: {allItems}</p>

      </div>
    );
  }
}

export default PokemonDetail;

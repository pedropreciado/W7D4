import React from "react";
import { Link } from "react-router-dom";

export const PokemonIndexItem = ({ poke }) => {

  return (
    <li key={poke.id}>
      <Link to={`/pokemon/${poke.id}`}>
        {poke.name}
      </Link>
      </li>
  );
};

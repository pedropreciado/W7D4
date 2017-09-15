import { values } from "lodash";

export const selectAllPokemon = (state) => {
  return values(state.entities.pokemon);
};

export const selectOnePokemon = (state, id) => {
  return state.entities.pokemon[id];
};

export const selectItems = (state) => {
  return state.entities.items;
};

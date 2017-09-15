export const RECEIVE_ONE_POKEMON = "RECEIVE_ONE_POKEMON";

export const uiReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ONE_POKEMON:
      const newState = {};
      newState.pokeDisplay = action.poke.pokemon.id;
      newState.errors = {};
      newState.loading = {};
      return newState;
    default:
      return state;
  }
};

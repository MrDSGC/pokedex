import {RECEIVE_POKE} from '../actions/pokemon_actions';

const PokemonDetailReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_POKE:
      return action.poke;
    default:
      return state;
  }
};

export default PokemonDetailReducer;

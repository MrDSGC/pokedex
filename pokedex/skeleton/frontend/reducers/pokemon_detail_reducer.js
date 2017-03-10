import {RECEIVE_POKE} from '../actions/pokemon_actions';

const initialState = {
  id: "",
  name: "",
  attack: "",
  defense: "",
  poke_type: "",
  moves: [],
  image_url: "",
  items: []
};

const PokemonDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POKE:
      return action.poke;
    default:
      return state;
  }
};

export default PokemonDetailReducer;

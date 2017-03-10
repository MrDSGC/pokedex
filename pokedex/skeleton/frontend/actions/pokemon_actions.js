import {getPokemon, getPoke, postPoke} from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKE = "RECEIVE_POKE";

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon
});

export const fetchAllPokemon = () => (dispatch) => {
  return getPokemon()
    .then(
      pokemon => dispatch(receiveAllPokemon(pokemon))
    );
};

export const receivePoke = (poke) => ({
  type: RECEIVE_POKE,
  poke
});

export const fetchPoke = (pokeId) => (dispatch) => {
  return getPoke(pokeId)
    .then(
      poke => dispatch(receivePoke(poke))
    );
};

export const createPoke = (formPoke) => (dispatch) => {
  return postPoke(formPoke)
    .then(
      poke => dispatch(receivePoke(poke))
    );
};

import values from 'lodash/values';

export const selectAllPokemon = (state) => {
  return values(state.pokemon);
};

export const selectPokemonItem = (state, itemId) => {
  let selectedItem = undefined;
  state.poke.items.forEach(item => {
    if (item.id == itemId){
      selectedItem = item;
    }
  });
  return selectedItem;
};

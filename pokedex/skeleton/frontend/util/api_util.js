export const getPokemon = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/`
  });
};

export const getPoke = (pokeId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/pokemon/${pokeId}`
  });
};

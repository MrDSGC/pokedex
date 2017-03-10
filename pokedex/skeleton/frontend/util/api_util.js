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

export const postPoke = (poke) => {
  return $.ajax({
    method:'POST',
    url: `/api/pokemon`,
    data: { poke }
  });
};

function pokemonCollection(pokemons) {
  let library = [];
  for (let p of pokemons) {
    if (!library.includes(p)) {
      library.push(p);
    }
  }
  let rest = 151 - library.length;
  return rest;
}

export { pokemonCollection };

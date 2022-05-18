import React from 'react';

export default function PokemonList({ pokemonData }) {
  return (
    <div className='pokemonList'>
      {
        pokemonData.map((poke, i) =>
          <div className='pokemon' key={poke.pokemon + i} style={{ backgroundColor: poke.color_1 }}>
            <h2>{poke.pokemon}</h2>
            <img src={poke.url_image} />
            <p>Pokedex Number: {poke.species_id}</p>
            <p>Type: {poke.type_1} & {poke.type_2}</p>
            <p>Height: {poke.height}</p>
            <p>Weight: {poke.weight}</p>
          </div>)
      }
    </div>
  );
}

import { useState } from 'react';
import { getPokemonData } from './services/fetch-utils';
import Spinner from './Spinner';
import PokemonList from './PokemonList';

export default function PokemonSearch() {
      // you'll need to track your pokemon search results, the loading state, and one form field: name. For this form field, set a real initial values (like 'pikachu') so the form populates with a default value.
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonQuery, setPokemonQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handlePokemonSubmit(e) {
    e.preventDefault();
      
        // set the loading state to true
    setIsLoading(true);
        // use fetch to make a request to your netlify pokemon function. Be sure to pass the pokemon name as a query param in the URL
    const { data: { results } } = await getPokemonData(pokemonQuery);
        // put the jsonified data in state and set the loading state to false
    setPokemonData(results);
    setIsLoading(false);
  }
      
  return (
    <section className='pokemon'>
      {/* make the fetch on submit */}
      <form onSubmit={handlePokemonSubmit}>
            Search pokemon for a Pokemon
        {/* add inputs/labels for the pokemon name, using all the things we need with react forms. Don't forget to use the value property to sync this up with the default value in react state */}
        <input onChange={e => setPokemonQuery(e.target.value)}/>
        <button>Get pokemon</button>
      </form>
      {/* Make a PokemonList component to import and use here. Use a ternery to display a loading spinner (make a <Spinner /> component for this) if the data is still loading. */}
      {
        isLoading
          ? <Spinner />
          : <PokemonList {...pokemonData}/>
      }
    </section>
  );

}

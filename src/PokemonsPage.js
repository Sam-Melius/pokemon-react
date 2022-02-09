import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);


  return (
    <>
      <div>PokemonsPage</div>
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
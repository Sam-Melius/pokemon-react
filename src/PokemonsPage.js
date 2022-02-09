import { useEffect, useState } from 'react';
import './App.css';
import { getPokemons } from './services/fetch-utils';
import PokemonList from './PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 50;

  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const pokes = await getPokemons(from, to);

      setPokemons(pokes);
    }
    fetch();
  }, [page]);

  return (
    <>
      <h3>Current Page {page}</h3>
      <div>
        <button onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        <button onClick={() => setPage(page + 1)}
          disabled={pokemons.length < perPage}>Next Page</button>
      </div>
      <PokemonList pokemons={pokemons} />
    </>
  );
}

export default App;
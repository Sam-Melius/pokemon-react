import Pokemon from './Pokemon.js';

export default function PokemonList({ pokemons }) {
  return (
    <div className='pokemon-list'>
      {
        pokemons.map(pokemon => <Pokemon key={pokemon.id, pokemon.pokemon} 
          pokemon={pokemon}
        />)

      }
    </div>);
  
}

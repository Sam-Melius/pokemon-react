import Pokemon from './Pokemon.js';

// export default function PokemonList({ pokemons }) {
//   return (
//     <div className='pokemon-list'>
//       {
//         pokemons.map(pokemon => <Pokemon key={pokemon.id, pokemon.pokemon} 
//           pokemon={pokemon}
//         />)

//       }
//     </div>);
  
// }

import React, { Component } from 'react';

export default class PokemonList extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='pokemon-list'>
        {
          pokemons.map(pokemon => <Pokemon key={pokemon.id, pokemon.pokemon} 
            pokemon={pokemon}
          />)

        }
      </div>);
    
  }
}

import { Link } from 'react-router-dom';

// export default function Pokemon({ pokemon }) {
//   return (
//     <Link to={`/pokemons/${pokemon.id}`}>
//       <div className='pokemon'>
//         <img className='pokemon-img' src={pokemon.url_image}/>
//         <p>{pokemon.pokemon}</p>
//       </div>
//     </Link>
//   );
// }

import React, { Component } from 'react';

export default class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    return (
      <Link to={`/pokemons/${pokemon.id}`}>
        <div className='pokemon'>
          <img className='pokemon-img' src={pokemon.url_image}/>
          <p>{pokemon.pokemon}</p>
        </div>
      </Link>
    );
  }
}

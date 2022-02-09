import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSinglePokemon(params.id);
      setPokemon(data);
    }
    onLoad();
  }, [params.id]);

  return (
    <>
      <Link to='/'>Home</Link>
      <div className='pokemon-detail'>
        <p>Name: {pokemon.pokemon}</p>
        <img className='poke-img' src={pokemon.url_image}/>
        <p>Species: {pokemon.species_id}</p>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Base Experiance: {pokemon.base_experience}</p>
        <p>Type 1: {pokemon.type_1}</p>
        <p>Type 2: {pokemon.type_2}</p>
        <p>Attack: {pokemon.attack}</p>
        <p>Defense: {pokemon.defense}</p>
        <p>HP: {pokemon.hp}</p>
        <p>Special Attack: {pokemon.special_attack}</p>
        <p>Special Defense: {pokemon.special_defense}</p>
        <p>Speed: {pokemon.speed}</p>
        <p>Ability 1: {pokemon.ability_1}</p>
        <p>Ability 2: {pokemon.ability_2}</p>
        <p>Hidden Ability: {pokemon.ability_hidden}</p>
        <p>Color 1: {pokemon.color_1}</p>
        <p>Color 2: {pokemon.color_2}</p>
        <p>Color F: {pokemon.color_f}</p>
        <p>Egg Group 1: {pokemon.egg_group_1}</p>
        <p>Egg Group 2: {pokemon.egg_group_2}</p>
        <p>Generation: {pokemon.generation_id}</p>
        <p>Evolves from: {pokemon.evolves_from_species_id}</p>
        <p>Evolution Chain: {pokemon.evolution_chain_id}</p>
        <p>Shape Id: {pokemon.shape_id}</p>
        <p>Shape: {pokemon.shape}</p>
        <p>Poke Base: {pokemon.pokebase}</p>
        <p>PokeDex{pokemon.pokedex}</p>
      </div>
    </>
  );
}

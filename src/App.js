import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';
import './App.css';
import PokemonDetail from './PokemonDetail';
import PokemonsPage from './PokemonsPage';

export default function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/'>
            <PokemonsPage />
          </Route>
          <Route exact path='/pokemons/:id'>
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}



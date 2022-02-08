import { BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import './App.css';
import PokemonDetail from './PokemonDetail';
import PokemonsPage from './PokemonsPage';

function App() {
  return (
    <Router>
      <div>
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

export default App;

import './App.css';
import Home from './components/home/Home';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';
import CreateItem from './components/items/CreateItem';
import ListItem from './components/items/ListItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route exact path="/items" component={ListItem} />
            <Route exact path="/item/new" component={CreateItem}/>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

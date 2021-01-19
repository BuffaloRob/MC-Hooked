import './App.css';
import Home from './components/home/Home';
import { Route, Switch, Router } from 'react-router-dom';
import history from './history';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router history={history}>
          <Switch>
            <Route exact path = "/" component={Home} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;

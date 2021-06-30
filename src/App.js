import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home, NewEmployee, Seeemployee } from './components'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/newemployee" exact component={() => <NewEmployee />} />
          <Route path="/seeemployee" exact component={() => <Seeemployee />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

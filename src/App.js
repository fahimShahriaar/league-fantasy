import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Header/Header';
import Leagues from './Components/Leagues/Leagues';
import LeagueDetail from './Components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route path="/home">
            <Header />
            <Leagues />
          </Route>
          <Route exact path="/">
            <Header />
            <Leagues />
          </Route>
          <Route path="/league/:idLeague">
            <LeagueDetail />
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;

 
import './App.css';
 
import Home from './Competent/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Competent/NoMatch/NoMatch';
 

function App() {
 
 
  return (
    <Router>
c      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
           <NoMatch></NoMatch>
          </Route>
          </Switch>
  </Router>
  );
}

export default App;
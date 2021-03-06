 
import './App.css';
 
import Home from './Competent/Home/Home';
import CountryDetail from './Competent/CountryDetail/CountryDetail';
 
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
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/country/:countryAlpha2Code">
       <CountryDetail></CountryDetail>
          </Route>
          <Route path="*">
           <NoMatch></NoMatch>
          </Route>
          </Switch>
  </Router>
  );
}

export default App;
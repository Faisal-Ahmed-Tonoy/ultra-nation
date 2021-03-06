import logo from './logo.svg';
import './App.css';

import { useEffect, useState } from 'react';
import Country from './Competent/Country';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  const [countries, setCountries] =  useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[] )
  return (
    <div>
      <h1>Countries Number : {countries.length}</h1>
      {
        countries.map(country => <Country country={country}> </Country>)
       
      }
       
    </div>
  );
}

export default App;
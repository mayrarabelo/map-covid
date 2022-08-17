import './App.css';
import api from './services/api';
import { useEffect, useState } from 'react';

function App () {

  const [countries, setCountries] = useState([]);
  var countriesSlice = [];

  useEffect(() => {
    api.get('summary')
      .then((response) =>
      setCountries(response.data.Countries))      
  }, []);

  function ramdon(){
    countriesSlice = countries.sort(()=> Math.random() - 0.5).slice(0,10);
    console.log('slice: ', countries)
  }

  ramdon();


  return (
    <div>
      teste
      <ul>
          
          {countriesSlice.map(repo => {
            return (
              <li key={repo.CountryCode}>
                <strong >{repo.Country}</strong>
                <p>Novos casos confirmados: {repo.NewConfirmed}</p>
                <p>Total de casos confirmados: {repo.TotalConfirmed}</p>
                <p>Novas mortes: {repo.NewDeaths}</p>
                <p>Total de mortes: {repo.TotalDeaths}</p>
                <p>Novos recuperados: {repo.NewRecovered}</p>
                <p>Total de recuperados {repo.TotalRecovered}</p>
                <p>Data: {repo.Date}</p>
              </li>
            )
          })}
        </ul>
    </div>
  )  

}

export default App

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
    <div className='container'>
      <header className='center'> 
        <h1>Dados globais da COVID-19</h1>
        <p>Veja abaixo dados de alguns países:</p>
      </header>

      <main>

        <ul>
          
          {countriesSlice.map(repo => {
            return (
              <li  className='box' key={repo.CountryCode}>
                <strong className='flex flex-center'>{repo.Country}</strong>
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
      </main>

      <footer className='center'>
        <p>©Copyright 2022 by Mayra S Rabelo</p>
      </footer>      
      
    </div>
  ) 

}

export default App
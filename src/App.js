import './App.css';
import api from './services/api';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

function App() {

  const [countries, setCountries] = useState([]);
  var countriesSlice = [];

  useEffect(() => {
    api.get('summary')
      .then((response) =>
        setCountries(response.data.Countries))
  }, []);

  function ramdon() {
    countriesSlice = countries.sort(() => Math.random() - 0.5).slice(0, 10);
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
                <p>Novos casos confirmados: <strong>{repo.NewConfirmed}</strong></p>
                <p>Total de casos confirmados: <strong>{repo.TotalConfirmed}</strong></p>
                <p>Novas mortes: <strong>{repo.NewDeaths}</strong></p>
                <p>Total de mortes: <strong>{repo.TotalDeaths}</strong></p>
                <p>Novos recuperados: <strong>{repo.NewRecovered}</strong></p>
                <p>Total de recuperados <strong>{repo.TotalRecovered}</strong></p>
                <p>Data: <strong>{repo.Date}</strong></p>
              </li>
            )
          })}
        </ul>
      </main>

      <footer className='center'>
        <p>©Copyright 2022 by Mayra S Rabelo</p>
      </footer>      
      
    </div >
  )

}

export default App
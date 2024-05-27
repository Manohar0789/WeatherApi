import React, { useState } from 'react';
import  './app.css'
import axios from 'axios';


const App = () => {
  const [city,setCity]=useState('');
  const[weather,setWeather]=useState(null);
  const[error,setError]=useState('');

  const apikey='d86003b4637d6a38dfe4cc3c2afcca1b';

  const getWeather = async()=>{
    try{
      const res=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      setWeather(res.data);
      setError('');
    }
  catch(err){
    setError('city not found');
    setWeather(null);
  }
};

  return (
    <div className='df'>
      <input 
      type='text'
      value={city}
      onChange={(e)=> setCity(e.target.value)} 
      placeholder='Enter Location'
      />
      <button onClick={getWeather}>Get Data</button>
      <div className='data'>
        {error && <p>{error}</p>}
        {weather && (
          <>
            <h1><span id="temp">{weather.main.temp}</span>&deg;C</h1>
            <h3>{weather.weather[0].description}</h3>
            <h2>{weather.name}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
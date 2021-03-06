import React, { useState } from 'react';

const api = {
  key: process.env.REACT_APP_WEATHER_KEY,
  base: process.env.REACT_APP_WEATHER_BASE_URL
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          if (result.cod === '404') {
            setError('Place not found 😔');
            setQuery('')
            setWeather({})
          } else {
            setWeather(result);
            setQuery('');
            console.log('search', result);
            setError('');
          }
        })
        .catch((error) => {
          if (error.cod === '404') {
            setError('Place not found 😔');
          }
        })
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "Abril", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`
  }

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'App warm' : 'App') : 'App'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main !== "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">
                {weather.weather[0].main}
              </div>
            </div>
          </div>
      ) : (error !== '') ? (
        <div className="weather-error">{error}</div>
      ) : ('')}
      </main>
    </div>
  );
}

export default App;

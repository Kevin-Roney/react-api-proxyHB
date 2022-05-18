import React from 'react';

export default function ForecastList({ weatherData }) {
  function changeKToF(temp) {
    return 1.8 * (temp - 273) + 32;
  }
  return (
    <div>
      <h2>Weather</h2>
      {
        weatherData.map(({ temp, clouds, dt }, i) => 
          <div key={temp + clouds + dt + i}>
            <h2>{changeKToF(temp.day)} degrees</h2>
            <p>{clouds}% cloud cover</p>
            <p>{String(new Date(dt * 1000))}</p>
          </div>)
      }
    </div>
  );
}

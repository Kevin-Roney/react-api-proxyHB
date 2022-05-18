import React from 'react';

export default function ForecastList({ weatherData }) {
  return (
    <div>
      <h2>Weather</h2>
      {weatherData.map(({ temp, clouds, dt }, i) => 
        <div key={temp + clouds + dt + i}>
          <h2>{temp.day} degrees</h2>
          <p>{clouds}% cloud cover</p>
          <p>{String(new Date(dt * 1000))}</p>
        </div>)
      }

    </div>

  );
}
//
import React from 'react';

export default function BusinessList({ yelpData }) {
  return (
    <div>
      <h2>Restaurants:</h2>
      {
        yelpData.map((data, i) =>
          <div key={data.name + i}>
            <h2>{data.name}</h2>
            <p>{data.price}</p>
            <p>{data.phone}</p>
            <img src={data.image_url} />
          </div>)
      }
    </div>
  );
}

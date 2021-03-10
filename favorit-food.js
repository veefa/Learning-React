import React from 'react';
import ReactDOM from 'rect-dom';

// judgmental will be true half of time
const judgmental = (
  <div>
    <h1>My Favorit Food</h1>
    <ul>
      {judgmental && <li>Sushi Burrito</li>}
      {judgmental && <li>Rhubarb Pie</li>}
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      {judgmental && <li>Broiled Grapefruit</li>}
    </ul>
  </div>
);

ReactDOM.render(judgmental, document.getElementById('app'));


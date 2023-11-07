import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-container">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the <b>#vanlife</b> movement. Rent the perfect van to make your
        perfect road trip.
      </p>
      <Link className="btn" to="vans">
        Find your van
      </Link>
      <div className="money">
        <h1>Mom : 100</h1>
        <h1>DIDI: 54</h1>
      </div>
    </div>
  );
}

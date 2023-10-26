import React from 'react';
import bgImg from '../assets/images/about-hero.png';
import { Link } from 'react-router-dom';
const arr = ['1st', '2nd'];

export default function About({ handleNumber, state: { value, valueTwo, count, number } }) {
  return (
    <>
      <div className="about-page-container">
        <img src={bgImg} className="about-hero-image" />
        <div className="about-page-content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are
            recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs
            extra 😉)
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4
            wheels.
          </p>
        </div>
        <div className="about-page-cta">
          <h2>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="link-button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
      <div className={`random ${value && 'so-random'} ${valueTwo && 'so-so-random'}`}>Count : {count}</div>
      <h1>{number}</h1>
      {arr.map((id, i) => {
        return (
          <button key={i} onClick={handleNumber(id)}>
            call user {i + 1}
          </button>
        );
      })}
    </>
  );
}

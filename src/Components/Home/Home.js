import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
  return (
    <section className="main-section home">
      <h1>Hello, would you like help to find a clinical trial?</h1>
      <h2>Prostate cancer trials</h2>

      <button className="link-button medium-blue">
        <Link to="/basic-info">Find a trial</Link>
      </button>

      <button className="link-button dark-blue">
        <Link to="/trials">View all trials</Link>
      </button>

      <svg
        aria-labelledby="big-logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 237.2 231.37"
        className="body-logo"
      >
        <title id="big-logo" lang="en">
          Curenetics Clinical Trials Logo
        </title>
        <ellipse cx="45.13" cy="44" rx="44.97" ry="43.91" />
        <ellipse cx="192.03" cy="187.38" rx="44.97" ry="43.91" />
        <ellipse cx="191.57" cy="44" rx="44.97" ry="43.91" />
        <ellipse cx="45.13" cy="187.38" rx="44.97" ry="43.91" />
        <rect x="55.83" y="35.67" width="120" height="16.67" />
        <rect x="54.08" y="179.05" width="120" height="16.67" />
        <rect
          x="-41.68"
          y="100.89"
          width="173.62"
          height="18.4"
          transform="translate(-64.95 155.22) rotate(-90)"
        />
      </svg>
    </section>
  );
};

export default Home;

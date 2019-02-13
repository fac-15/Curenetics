import React from "react";
import "./home.css";
// import "../Button/Button";
import { Link } from "react-router-dom";

const Home = props => {
  const logo = require("./curenetics-blue-01.svg");
  const title = props.appName;

  return (
    <section className="main-section home">
      <h1>Hello, would you like help to find a clinical trail?</h1>

      <button className="link-button medium-blue">
        <Link to="/basic-info">Find a Trial</Link>
      </button>

      <button className="link-button dark-blue">
        <Link to="/results">View all Trials</Link>
      </button>

      <img src={logo} className="body-logo" alt={title} />
    </section>
  );
};

export default Home;

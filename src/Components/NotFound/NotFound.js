import React from "react";
import { Link } from "react-router-dom";

import "./not-found.css";

const NotFound = props => {
  return (
    <div className="main-section not-found">
      <h2> {props.location.pathname} does not exists</h2>

      <button className="link-button-not-found dark-blue-not-found">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default NotFound;

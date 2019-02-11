import React from "react";
import "./results.css";

const Results = props => {
  const resultsList = props.results.results;

  return (
    <section className="main-section">
      <h3>Results</h3>
      {resultsList ? (
        resultsList.map(item => (
          <li key={item.id}>
            <p>Gender: {item.Gender}</p>
          </li>
        ))
      ) : (
        <p>No results</p>
      )}
    </section>
  );
};

export default Results;

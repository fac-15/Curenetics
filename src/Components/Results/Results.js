import React from "react";
import "./results.css";

import Card from "../Card/Card";

const Results = props => {
  // get results, error messages etc
  const resultsList = props.results.results.results;
  const noResultsMsg = props.results.noResultsMsg;

  // prepare the results list
  const resultsArray = resultsList.map((item, index) => (
    <li className="small-card" key={index}>
      <Card data={{ item, index }} />
    </li>
  ));

  // if there are no results, display an error message
  const displayResults =
    resultsArray.length > 0 ? (
      <ul className="results-list">{resultsArray}</ul>
    ) : (
      <p>{noResultsMsg}</p>
    );

  return (
    <section className="main-section">
      <h2>{resultsList.length} results</h2>
      {displayResults}
    </section>
  );
};

export default Results;

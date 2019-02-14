import React from "react";
import "./results.css";
// import SmallCard from "../SmallCard/SmallCard";

// maybe move these out of small card
const back = require("../SmallCard/arrow-backward.svg");
const forward = require("../SmallCard/arrow-forward.svg");
// const tick = require("../SmallCard/tick.svg");
// const cross = require("../SmallCard/cross.svg");
const calendar = require("../SmallCard/calendar.svg");
const marker = require("../SmallCard/marker.svg");
const file = require("../SmallCard/summary-file.svg");

const Results = props => {
  // get results, error messages etc
  const resultsList = props.results.results.results;
  const noResultsMsg = props.results.noResultsMsg;

  // prepare the results list
  const resultsArray = resultsList.map(item => (
    // make variables for things to keep them readable

    <li className="small-card" key={item.IDInfo.OrgStudyID}>
      <div className="card-row">
        {item.Locations[0].Status ? (
          <>
            <div className="open">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z" />
              </svg>
            </div>
            <div className="open">Recruiting</div>
          </>
        ) : (
          <>
            <div className="closed">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
              </svg>
            </div>
            <div className="closed">Not Recruiting</div>
          </>
        )}
      </div>
      <h3>Title of Trial</h3>
      <div className="card-row">
        <div>
          <img src={calendar} alt="starting date of trial" />
        </div>
        <div>Starting Date: starting date</div>
      </div>
      <div className="card-row">
        <div>
          <img src={marker} alt="location of trial" />
        </div>
        <div>{item.Locations[0].Facility.Name}</div>
      </div>
      <div className="card-row">
        <div>
          <img src={file} alt="summaryof trial" />
        </div>
        <div>Summary:</div>
      </div>

      {/* <p>Gender: {item.Gender}</p>
      <p>Location : {item.Locations[0].Facility.Name}</p>
      <p>Zip: {item.Locations[0].Facility.Address.Zip}</p>

      <ul>
        Conditions:
        {item.Conditions.map(con => (
          <li key={con} style={{ marginLeft: "2rem" }}>
            {con}
          </li>
        ))}
      </ul> */}
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

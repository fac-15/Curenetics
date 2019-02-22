import React from "react";
const Summary = () => {
  // adds a default passage of text for the summary
  return (
    <div className="card-row">
      <div>
        <svg
          aria-labelledby="summary"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <title id="summary" lang="en">
            Summary
          </title>
          <path d="M28 4H12C9.79 4 8.02 5.79 8.02 8L8 40c0 2.21 1.77 4 3.98 4H36c2.21 0 4-1.79 4-4V16L28 4zm4 32H16v-4h16v4zm0-8H16v-4h16v4zm-6-10V7l11 11H26z" />
        </svg>
      </div>
      <div>
        <span className="small-heading">Summary:</span>
        <span className="missing-data" style={{ margin: "20" }}>
          Data Missing From API
        </span>
        {/* {" "}
          This trial is looking at using aspirin to see if it can help stop cancer coming back after
          treatment. This trial is open to people who have had an early stage cancer. */}
      </div>
    </div>
  );
};
export default Summary;

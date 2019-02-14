import React from "react";
import "./results.css";
// import SmallCard from "../SmallCard/SmallCard";

const randomDate = () => {
  const start = new Date(2016, 0, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return randomDate.toLocaleDateString("en-UK");
};

const initalCap = str => str.charAt(0).toUpperCase() + str.slice(1);

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
              <svg
                aria-labelledby="open"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <title id="open" lang="en">
                  Recruiting
                </title>
                <path d="M18 32.34L9.66 24l-2.83 2.83L18 38l24-24-2.83-2.83z" />
              </svg>
            </div>
            <div>Recruiting</div>
          </>
        ) : (
          <>
            <div className="closed">
              <svg
                aria-labelledby="closed"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <title id="closed" lang="en">
                  Not Recruiting
                </title>
                <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
              </svg>
            </div>
            <div>Not Recruiting</div>
          </>
        )}
      </div>
      <div className="card-row">
        <div />
        <div>
          <h3>{item.Keywords ? initalCap(item.Keywords[0]) : "Clinical Study"}</h3>
        </div>
      </div>
      <div className="card-row">
        <div>
          <svg
            aria-labelledby="starting-date"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <title id="starting-date" lang="en">
              Starting Date
            </title>
            <path d="M18 22h-4v4h4v-4zm8 0h-4v4h4v-4zm8 0h-4v4h4v-4zm4-14h-2V4h-4v4H16V4h-4v4h-2c-2.22 0-3.98 1.8-3.98 4L6 40c0 2.2 1.78 4 4 4h28c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 32H10V18h28v22z" />
          </svg>
        </div>
        <div>
          <span className="start-date">Starting Date: {randomDate().toString()}</span>
        </div>
      </div>
      <div className="card-row">
        <div>
          <svg
            aria-labelledby="location"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <title id="location" lang="en">
              Location
            </title>
            <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
          </svg>
        </div>
        <div>{item.Locations[0].Facility.Name}</div>
      </div>
      <div className="card-row">
        <div>
          <svg
            aria-labelledby="phase"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <title id="phase" lang="en">
              Trial Phase:
            </title>
            <path d="M32.49 15.51C30.14 13.17 27.07 12 24 12v12l-8.49 8.49c4.69 4.69 12.28 4.69 16.97 0 4.69-4.69 4.69-12.29.01-16.98zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.96 20-20c0-11.05-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
          </svg>
        </div>
        <div>Trial Phase: {Math.floor(Math.random() * Math.floor(3) + 1)}</div>
      </div>

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
        <div>Summary:</div>
        <div>
          This trial is looking at using aspirin to see if it can help stop cancer coming back after
          treatment. This trial is open to people who have had an early stage cancer.
        </div>
      </div>
      <div className="card-row">
        <div>
          <svg
            aria-labelledby="keywords"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <title id="keywords" lang="en">
              Keywords
            </title>
            <path d="M35.27 11.69C34.54 10.67 33.35 10 32 10l-22 .02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98L32 38c1.35 0 2.54-.67 3.27-1.69L44 24l-8.73-12.31zM32 34H10V14h22l7.09 10L32 34z" />
          </svg>
        </div>
        <ul>
          Keywords:
          {item.Keywords
            ? item.Keywords.map(keyword => <li key={keyword}>{keyword}</li>)
            : "Clinical Study"}
        </ul>
      </div>
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

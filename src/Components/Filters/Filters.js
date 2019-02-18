import React from "react";
import Dropdown from "./Dropdown";

import "./Filters.css";

class Filters extends React.Component {
  render() {
    const phase = (
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
    );

    const pin = (
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
    );

    const timer = (
      <svg
        aria-labelledby="duration"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <title id="location" lang="en">
          Location
        </title>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z" />
      </svg>
    );
    return (
      <div className="filters">
        <h1> Search Filters: </h1>
        <Dropdown
          title={["Trial Phase: Any", "Trial Phase: 1", "Trial Phase: 2", "Trial Phase: 3"]}
          icon={phase}
          handleChange={this.props.onChange}
        />
        <Dropdown
          title={["Distance: Any", "Distance: 10m", "Distance: 50m", "Distance: 100m"]}
          icon={pin}
        />
        <Dropdown
          title={[
            "Duration: Any",
            "Duration: < 1 month",
            "Duration: 2-3 months",
            "Duration: 3-6 months",
          ]}
          icon={timer}
        />
      </div>
    );
  }
}

export default Filters;

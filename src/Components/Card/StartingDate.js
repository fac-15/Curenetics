import React from "react";
const StartingDate = () => {
  // random date function
  const randomDate = () => {
    const start = new Date(2016, 0, 1);
    const end = new Date();
    const randomDate = new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
    return randomDate.toLocaleDateString("en-UK");
  };
  return (
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
        <span className="small-heading">Starting Date:</span>
        <span className="missing-data">Data Missing From API</span>
        {/* {randomDate().toString()} */}
      </div>
    </div>
  );
};
export default StartingDate;

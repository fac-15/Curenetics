import React from "react";
const Location = locations => {
  //   console.log(locations.data.Facility);
  const { Name, Address } = locations.data.Facility;
  const firstPostCode = Address.Zip;
  return (
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

      <div>
        <span className="small-heading">{Name},</span> {firstPostCode}
      </div>
    </div>
  );
};
export default Location;

import React from "react";

// viewed and bookmarked items
// - when clicked, modify the list to show stuff in localStorage
const Viewed = props => {
  //   const titleArr = props.title;
  // console.log(props);

  // show recent button if there are results in localStorage
  const recentBtn = props.toggle ? (
    <button className="filter-button" onClick={e => props.recentlyViewed()}>
      <svg
        aria-labelledby="recently-viewed"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <title id="recently-viewed" lang="en">
          Recently Viewed
        </title>
        <path d="M12 5v10l9 9-9 9v10h24V33l-9-9 9-9V5H12zm20 29v5H16v-5l8-8 8 8zm-8-12l-8-8V9h16v5l-8 8z" />
      </svg>
      Recently Viewed
    </button>
  ) : (
    ""
  );
  return <div className="saved-trials">{recentBtn}</div>;
};

export default Viewed;

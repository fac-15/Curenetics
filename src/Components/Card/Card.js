import React from "react";
// get all of the svg things that make code hard to reason about
import Recruiting from "./Recruiting";
import NotRecruiting from "./NotRecruiting";
import StartingDate from "./StartingDate";
import Location from "./Location";
import Phase from "./Phase";
import Summary from "./Summary";
import Keywords from "./Keywords";

// get the linking thing
import { Link } from "react-router-dom";

// trial title
const initalCap = str => str.charAt(0).toUpperCase() + str.slice(1);
// slug for routing (from trial title)
const urlSlug = str => str.split(" ").join("_");

// Card component sits within li element
// - use this within a loop
// - props = item
const Card = props => {
  const { item, index } = props.data;
  //   const keyName = index; // not used here - in li parent element

  // uk location - works sometimes
  const getUkLocation = locations => {
    return locations.filter(location => location.Facility.Address.Country === "United Kingdom");
  };

  // variables we use to reason about the code better
  const isRecruiting = getUkLocation(item.Locations)[0].Status;
  const trialTitle = item.Keywords ? initalCap(item.Keywords[0]) : "Clinical Study";
  const ukLocation = getUkLocation(item.Locations)[0];
  // create page url from page title, if it exists
  const pageUrl = item.Keywords ? `/trials/${urlSlug(initalCap(item.Keywords[0]))}` : "trial-name";

  return (
    <>
      <div className="card-inner">
        <div className="card-row">{isRecruiting ? <Recruiting /> : <NotRecruiting />}</div>
        <div className="card-row">
          <div />
          <div>
            <h3>{trialTitle}</h3>
          </div>
        </div>
        <div className="card-row">
          <StartingDate />
        </div>
        <div className="card-row">
          <Location data={ukLocation} />
        </div>
        <div className="card-row">
          <Phase />
        </div>
        <div className="card-row">
          <Keywords data={item.Keywords} />
        </div>
      </div>
      <Link className="view-more" to={pageUrl}>
        {/* "/trials/:trial" */}
        Read More
        <svg
          aria-labelledby="more-link"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <title id="more-link" lang="en">
            Read More
          </title>
          <path d="M24 8l-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z" />
        </svg>
      </Link>
    </>
  );
};

export default Card;

//     <div className="card-row">
//   <div>
//     <svg
//       aria-labelledby="keywords"
//       xmlns="http://www.w3.org/2000/svg"
//       width="48"
//       height="48"
//       viewBox="0 0 48 48"
//     >
//       <title id="keywords" lang="en">
//         Keywords
//       </title>
//       <path d="M35.27 11.69C34.54 10.67 33.35 10 32 10l-22 .02c-2.21 0-4 1.77-4 3.98v20c0 2.21 1.79 3.98 4 3.98L32 38c1.35 0 2.54-.67 3.27-1.69L44 24l-8.73-12.31zM32 34H10V14h22l7.09 10L32 34z" />
//     </svg>
//   </div>
//   <div>
//     <h4>Keywords:</h4>

//     <ul className="keyword-tags">
//       {item.Keywords
//         ? item.Keywords.map(keyword => <li key={keyword}>{keyword}</li>)
//         : "Clinical Study"}
//     </ul>
//   </div>
// </div>
//   </div>

// </li>;

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
  const isRecruiting = getUkLocation(item.Locations)[0].Status === "Recruiting" ? true : false;
  const trialTitle = item.Keywords ? initalCap(item.Keywords[0]) : "Clinical Study";
  const ukLocations = getUkLocation(item.Locations);
  // create page url from page title, if it exists
  const pageUrl = item.Keywords
    ? `/trials/${urlSlug(initalCap(item.Keywords[0]))}`
    : "/trials/trial-name-to-be-added";

  return (
    <>
      <div className="card-inner" id={`single-card-${index}`}>
        <div className="card-row">{isRecruiting ? <Recruiting /> : <NotRecruiting />}</div>
        <div className="card-row">
          <div>
            <h3>{trialTitle}</h3>
          </div>
        </div>
        <StartingDate />
        <Location data={ukLocations[0]} />
        <Phase />
        <Summary />
        <Keywords data={item.Keywords} />
      </div>
      <Link className="view-more" to={{ pathname: pageUrl, params: { item, ukLocations } }}>
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

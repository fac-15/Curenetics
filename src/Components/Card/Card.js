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

  // constiables we use to reason about the code better
  const isRecruiting = getUkLocation(item.Locations)[0].Status === "Recruiting" ? true : false;
  const trialTitle = item.Keywords ? initalCap(item.Keywords[0]) : "Clinical Study";
  const ukLocations = getUkLocation(item.Locations);
  // create page url from page title, if it exists
  const pageUrl = item.Keywords
    ? `/trials/${urlSlug(initalCap(item.Keywords[0]))}`
    : "/trials/trial-name-to-be-added";

  // - - - - - - -
  // check if the user has entered a postcode (from App.js state)
  const postcodeEntered = props.userInfo.postCode.length > 0;
  // postcode (for the first trial in the list)
  const hasPostcode = !!ukLocations[0].Facility.Address.Zip;

  // if user entered a postcode, and the trial has a postcode...
  // - use distance matrix API (or a free version of this) to work out the distance apart
  // if (postcodeEntered && hasPostcode) {
  // // show how far away trial is from user entered address
  // const userPostcode = props.userInfo.postCode;
  // const trialPostcode = ukLocations[0].Facility.Address.Zip.replace(/ /g, "");
  // // console.log(userPostcode, trialPostcode);

  // const apiKey = "";
  // // const bingApi = postcode => {
  // fetch(`http://dev.virtualearth.net/REST/v1/Locations/UK/${userPostcode}?key=${apiKey}`)
  //   .then(res => res.json())
  //   .then(result => {
  //     const a = result.resourceSets[0].resources[0].point.coordinates;
  //     // console.log(a[0]);
  //     // console.log(userPostcode, result.resourceSets[0].resources[0].point.coordinates);
  //     // return result.resourceSets[0].resources[0].point.coordinates;
  //     // const distance = distance(51.5112139, -0.119824, 48.8567, 2.3508, "M");

  //     // make a request with the trial postcode - returns an API error for some
  //     // - perhaps change the formatting?
  //     console.log(index, "trial postcode is: ", trialPostcode);
  //     fetch(`http://dev.virtualearth.net/REST/v1/Locations/UK/${trialPostcode}?key=${apiKey}`)
  //       .then(res => res.json())
  //       .then(resultTwo => {
  //         const b = resultTwo.resourceSets[0].resources[0].point.coordinates;
  //         // console.log(b[0]);
  //         // console.log(trialPostcode, result.resourceSets[0].resources[0].point.coordinates);

  //         //
  //         // distance function - the haversine formula
  //         // https://www.htmlgoodies.com/beyond/javascript/calculate-the-distance-between-two-points-in-your-web-apps.html
  //         const distance = (lat1, lon1, lat2, lon2, unit) => {
  //           const radlat1 = (Math.PI * lat1) / 180;
  //           const radlat2 = (Math.PI * lat2) / 180;
  //           const radlon1 = (Math.PI * lon1) / 180;
  //           const radlon2 = (Math.PI * lon2) / 180;
  //           const theta = lon1 - lon2;
  //           const radtheta = (Math.PI * theta) / 180;
  //           let dist =
  //             Math.sin(radlat1) * Math.sin(radlat2) +
  //             Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  //           dist = Math.acos(dist);
  //           dist = (dist * 180) / Math.PI;
  //           dist = dist * 60 * 1.1515;
  //           if (unit == "K") {
  //             dist = dist * 1.609344;
  //           }
  //           if (unit == "N") {
  //             dist = dist * 0.8684;
  //           }
  //           return dist;
  //         };

  //         //
  //         const findDistance = distance(a[0], a[1], b[0], b[1], null);
  //         console.log(index, "distance to", item.Keywords[0], "is: ", parseInt(findDistance));
  //       })
  //       .catch(errorTwo => console.log("bing api error, two"));
  //   })
  //   .catch(error => console.log("bing api error, one"));
  // }

  // - - - - - - -

  return (
    <>
      <div className="card-inner">
        <button
          className="delete-button"
          onClick={() => {
            props.delete(item.IDInfo.NCTID);
          }}
        >
          <svg
            aria-labelledby="discard"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
          >
            <title id="discard" lang="en">
              Discard
            </title>
            <path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z" />
          </svg>
        </button>
        <div className="card-row">{isRecruiting ? <Recruiting /> : <NotRecruiting />}</div>

        <div className="card-row">
          <div />
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

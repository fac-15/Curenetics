import React from "react";
import "./results.css";

import Filters from "../Filters/Filters";
import Card from "../Card/Card";

import { Link } from "react-router-dom";

// postcode distances
import { apiKey } from "../../../api_keys/bing_key";
import { straightDistance } from "../../Functions/distance";

class Results extends React.Component {
  state = {
    results: [],
    isLoading: true,
    filterResults: {
      recruiting: "",
    },
    recent: "",
  };

  componentDidMount() {
    this.getTrials();
    const items = Object.keys(window.localStorage);
    const onlyTrials = items.filter(item => item.startsWith('"/trials/'));
    this.setState({
      recent: onlyTrials.length,
    });
  }

  getTrials = () => {
    const { postCode, age, gender } = this.props.userInfo;
    const baseUrl = "https://curenetics-api.herokuapp.com/data/trials/uk/";
    const distance = "100";
    fetch(`${baseUrl}${postCode || "B152TH"}/${distance}/${gender || "m"}/${age || "70"}/.json`)
      .then(res => res.json())
      .then(result => {
        // 1. user not entered postcode:
        // - set state to all trials
        // 2. user entered postcode:
        // i) map over results
        // - a) item does NOT have a postcode:
        //   - return item
        // - b) item HAS a postcode:
        //   i) fetch user postcode
        //   ii) THEN fetch trial postcode
        //   iii) THEN run distance function
        //   iv) THEN add distance to item and return
        //   - then set state to final results mapped in 2

        // 1.
        if (postCode.length === 0) {
          this.setState({
            results: result.results,
            isLoading: false,
          });
        }

        // 2.
        else {
          // - - - - - - - -
          // problem - addDistance is async if the users enters their postcode
          // - setState happens before the api calls to bing are made

          // - - - -
          // This part will add distance from the user to the trial if:
          // - a postcode is entered for the trial
          // const addDistance = result.results.map(item => {
          //   // get postcode (for the first UK trial in the list)
          //   const getUkLocation = locations => {
          //     return locations.filter(
          //       location => location.Facility.Address.Country === "United Kingdom"
          //     );
          //   };
          //   const ukLocations = getUkLocation(item.Locations);
          //   const hasPostcode = !!ukLocations[0].Facility.Address.Zip;

          //   // a) item does NOT have a postcode
          //   if (!hasPostcode) {
          //     return item;
          //   }
          //   // b) item HAS a postcode
          //   else {
          //     // get user entered address and trial postcode
          //     const userPostcode = item.userInfo.postCode;
          //     const trialPostcode = ukLocations[0].Facility.Address.Zip.replace(/ /g, "");
          //     // console.log(userPostcode, trialPostcode);
          //     // return userPostcode;
          //     // set up 2 bing API calls
          //     // const bingApi = postcode => {
          //     fetch(
          //       `http://dev.virtualearth.net/REST/v1/Locations/UK/${userPostcode}?key=${apiKey}`
          //     )
          //       .then(res => res.json())
          //       .then(result => {
          //         const a = result.resourceSets[0].resources[0].point.coordinates;
          //         // console.log(index, "trial postcode is: ", trialPostcode);
          //         fetch(
          //           `http://dev.virtualearth.net/REST/v1/Locations/UK/${trialPostcode}?key=${apiKey}`
          //         )
          //           .then(res => res.json())
          //           .then(resultTwo => {
          //             const b = resultTwo.resourceSets[0].resources[0].point.coordinates;
          //             // distance function
          //             // - get distance between two points in a straight line
          //             const findDistance = straightDistance(a[0], a[1], b[0], b[1], null);
          //             item.distanceFromUser = findDistance;
          //             return item;
          //             // console.log(
          //             //   index,
          //             //   "distance to",
          //             //   item.Keywords[0],
          //             //   "is: ",
          //             //   parseInt(findDistance)
          //             // );
          //           })
          //           .catch(errorTwo => console.log("bing api error, two"));
          //       })
          //       .catch(error => console.log("bing api error, one"));
          //   }
          // });
          // console.log(addDistance);
          const list = result.results;

          const functionWithPromise = item => {
            // a function that returns a promise
            return Promise.resolve(item);
          };

          const anAsyncFunction = async item => {
            return await functionWithPromise(item);
          };

          // try promise all stuff here
          const getData = async () => {
            return await Promise.all(list.map(item => anAsyncFunction(item)));
          };

          const addDistance = getData();
          // console.log(addDistance);

          // hold off setting state until addDistance is populated
          this.setState({
            results: addDistance,
            isLoading: false,
          });
        }

        // if (addDistance[0] === undefined) {
        //   finalResults = addDistance;
        // } else {
        //   finalResults = result.results;
        // }

        // this won't work properly:
        // - if the first item is missing
        // const finalResults = addDistance[0] === undefined ? result.results : addDistance;
        // console.log(finalResults);
      })

      .catch(error =>
        this.setState({
          isLoading: false,
          results: [],
          error,
        })
      );
  };

  handleChange = filterResults => {
    this.setState(prevState => ({
      filterResults: {
        ...prevState.filterResults,
        recruiting: filterResults,
      },
    }));
  };

  handleDelete = id => {
    const currentResults = this.state.results;
    // console.log(currentResults);
    const newResults = currentResults.filter(item => item.IDInfo.NCTID !== id);
    this.setState({ results: newResults });
  };

  recentlyViewed = () => {
    const items = Object.keys(window.localStorage);
    // need to check items starts with /trials
    const onlyTrials = items.filter(item => item.startsWith('"/trials/'));

    let recentlyViewed = [];
    onlyTrials.map(item => recentlyViewed.push(JSON.parse(localStorage.getItem(item))));
    // set state
    this.setState({
      results: recentlyViewed,
    });
  };

  render() {
    const { isLoading, results, filterResults } = this.state;
    const noResultsMsg = "No results, sorry";

    if (isLoading) {
      return (
        <section className="main-section">
          <Link className="back-link" to="/">
            <svg
              aria-labelledby="back"
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <title id="back" lang="en">
                Back to Home
              </title>
              <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
            </svg>
          </Link>
          <h2 className="results-count">Results are loading</h2>
        </section>
      );
    }
    if (!isLoading && results) {
      // make sure there are some results
      if (results.length > 0) {
        let resultsList = results;
        if (filterResults.recruiting === "true") {
          resultsList = resultsList.filter(result => result.Locations[0].Status === "Recruiting");
        }

        const resultsArray = resultsList.map((item, index) => (
          <li className="small-card" key={item.IDInfo.NCTID}>
            <Card
              data={{ item, index }}
              delete={this.handleDelete}
              userInfo={this.props.userInfo}
            />
          </li>
        ));

        const displayResults =
          resultsArray.length > 0 ? (
            <ul className="results-list">{resultsArray}</ul>
          ) : (
            <p>{noResultsMsg}</p>
          );

        return (
          <section className="main-section">
            <Link className="back-link" to="/">
              <svg
                aria-labelledby="back"
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
              >
                <title id="back" lang="en">
                  Back to Trials
                </title>
                <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
              </svg>
            </Link>

            <h2 className="results-count">{resultsArray.length} results</h2>
            <Filters
              onChange={this.handleChange}
              onClick={this.recentlyViewed}
              numberViewed={this.state.recent}
            />
            {displayResults}
          </section>
        );
      }

      // no results
      else {
        return (
          <section className="main-section">
            <h2 className="results-count">{noResultsMsg}</h2>
          </section>
        );
      }
    }
  }
}

export default Results;

import React from "react";
import "./results.css";

import Filters from "../Filters/Filters";
import Card from "../Card/Card";

import { Link } from "react-router-dom";

class Results extends React.Component {
  state = {
    results: [],
    isLoading: true,
    filterResults: {
      recruiting: "",
    },
  };

  componentDidMount() {
    this.getTrials();
  }

  getTrials = () => {
    const { postCode, age, gender } = this.props.userInfo;
    const baseUrl = "https://curenetics-api.herokuapp.com/data/trials/uk/";
    const distance = "100";
    fetch(`${baseUrl}${postCode || "B152TH"}/${distance}/${gender || "m"}/${age || "70"}/.json`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          results: result.results,
          isLoading: false,
        })
      )
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
    console.log(currentResults);
    const newResults = currentResults.filter(item => item.IDInfo.NCTID !== id);
    this.setState({ results: newResults });
  };

  render() {
    const { isLoading, results } = this.state;
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
                Back to Trials
              </title>
              <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
            </svg>
          </Link>
          <h2>Results are loading</h2>
        </section>
      );
    }
    if (!isLoading && results) {

      // make sure there are some results
      if (this.state.results.size > 0) {
        let resultsList = this.state.results;
        if (this.state.filterResults.recruiting === "true") {
          resultsList = resultsList.filter(result => result.Locations[0].Status === "Recruiting");
          // console.log("filter method", resultsList);
        }

        const resultsArray = resultsList.map(item => (
          <li className="small-card" key={item.IDInfo.NCTID}>
            <Card data={{ item }} delete={this.handleDelete} />
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

            <h2>{resultsArray.length} results</h2>
            <Filters onChange={this.handleChange} />
            {displayResults}
          </section>
        );
      }

      // no results
      else {
        return (
          <section className="main-section">
            <h2>{noResultsMsg}</h2>
          </section>
        );
      }
    }
  }
}

export default Results;

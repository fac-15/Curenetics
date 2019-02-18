import React from "react";
import "./results.css";

import Filters from "../Filters/Filters";
import Card from "../Card/Card";

class Results extends React.Component {
  state = {
    results: [],
    isLoading: true,
    filterResults: {
      phase: "",
    },
  };

  componentDidMount() {
    this.getTrials();
  }

  getTrials = () => {
    const { postCode, age, gender } = this.props.userInfo;
    const baseUrl = "http://35.234.148.3:8090/data/trials/uk/";
    const distance = "100";
    fetch(`${baseUrl}${postCode || "B152TH"}/${distance}/${gender || "m"}/${age || "70"}/.json`)
      .then(res => res.json())
      .then(result =>
        this.setState({
          results: result,
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
    this.setState({ filterResults });
  };

  render() {
    const { isLoading, results } = this.state;

    const noResultsMsg = "No results, sorry";

    // render things
    if (isLoading) {
      return (
        <section className="main-section">
          <h2>Results are loading</h2>
        </section>
      );
    }
    if (!isLoading && results) {
      // make sure there are some results

      // some results

      if (this.state.results.size > 0) {
        const resultsList = this.state.results.results;

        const resultsArray = resultsList.map((item, index) => (
          <li className="small-card" key={index}>
            <Card data={{ item, index }} />
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
            <h2>{this.state.results.size} results</h2>
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

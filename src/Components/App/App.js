import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Results from "../Results/Results";
import BasicInfo from "../BasicInfo/BasicInfo";
import SingleResult from "../SingleResult/SingleResult";

import "./app.css";

class App extends React.Component {
  state = {
    appName: "Curenetics",
    userinfo: {
      zip: "CM27jp",
      age: "10",
      gender: "m",
      distance: "100",
    },
    results: [],
    isLoading: true,
    error: false,
    noResultsMsg: "Sorry, there are no results",
  };

  componentDidMount() {
    this.getTrials();
  }

  getTrials = () => {
    const { zip, age, gender, distance } = this.state.userinfo;
    const baseUrl = "http://35.234.148.3:8090/data/trials/uk/";
    fetch(`${baseUrl}${zip}/${distance}/${gender}/${age}/.json`)
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

  render() {
    const { isLoading, error, results, appName } = this.state;
    if (isLoading) {
      // console.log(this.state, this.props);
      return <h1> loading ... </h1>;
    }
    if (!isLoading && results) {
      return (
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={() => <Home appName={this.state.appName} />} />
              <Route path="/results" component={() => <Results results={this.state} />} />
              <Route path="/basic-info" component={BasicInfo} />
              <Route path="/single-result" component={SingleResult} />
            </Switch>
          </>
        </Router>
      );
    }
  }
}

export default App;

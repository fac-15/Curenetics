import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Results from "../Results/Results";
import BasicInfo from "../BasicInfo/BasicInfo";

import "./app.css";

class App extends React.Component {
  state = {
    userInfo: {
      postCode: "",
      age: "",
      gender: "",
    },
    results: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.getTrials();
  }

  getTrials = () => {
    const { postCode, age, gender } = this.state.userInfo;
    const baseUrl = "http://35.234.148.3:8090/data/trials/uk/";
    const distance = "100";
    fetch(`${baseUrl}${postCode || "cm27jp"}/${distance}/${gender || "m"}/${age || "70"}/.json`)
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

  handleSubmit = userInfo => {
    this.setState({ userInfo }, () => {
      this.getTrials();
    });
  };

  // change this to display something if the api is still loading
  render() {
    const { isLoading, results } = this.state;

    if (isLoading) {
      return (
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </>
        </Router>
      );
    }
    if (!isLoading && results) {
      return (
        <Router>
          <>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/results"
                render={props => <Results {...props} results={this.state} />}
              />

              <Route
                path="/basic-info"
                render={props => <BasicInfo {...props} onSubmit={this.handleSubmit} />}
              />
            </Switch>
          </>
        </Router>
      );
    }
  }
}

export default App;

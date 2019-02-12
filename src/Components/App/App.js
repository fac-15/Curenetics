import React from "react";
import "./app.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Results from "../Results/Results";
import BasicInfo from "../BasicInfo/BasicInfo";
import SingleResult from "../SingleResult/SingleResult";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  state = {
    userinfo: {},
    results: [],
    isLoading: true,
    error: false
  };

  componentDidMount() {
    fetch("http://35.234.148.3:8090/data/trials/uk/CM27jp/100/m/70/.json")
      .then(res => res.json())
      .then(result =>
        this.setState({
          results: result,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          isLoading: false,
          results: [],
          error
        })
      );
  }

  render() {
    const { isLoading, error, results } = this.state;
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
              <Route exact path="/" component={Home} />
              <Route
                path="/results"
                component={() => <Results results={this.state.results} />}
              />
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

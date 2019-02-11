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
    isLoaded: false
  };

  componentDidMount() {
    fetch("http://35.234.148.3:8090/data/trials/uk/CM23/10/m/70/.json")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            results: result,
            isLoaded: true
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      );
  }

  render() {
    if (this.state.isLoaded) {
      // console.log(this.state, this.props);

      // we want to pass props down to components here, but the links are in the header, which is a child component
      // path is loading, but component is not, unless refreshed
      // - fixed by adding Header in router, wrapping all elements in Switch, and removing Router in header
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
    } else {
      return <h1>loading...</h1>;
    }
  }
}

export default App;

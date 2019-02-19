import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Results from "../Results/Results";
import BasicInfo from "../BasicInfo/BasicInfo";
import SingleResult from "../SingleResult/SingleResult";
import About from "../About/About";
import Faq from "../Faq/Faq";
import notFound from "../NotFound/NotFound";

import "./app.css";
import NotFound from "../NotFound/NotFound";

class App extends React.Component {
  state = {
    userInfo: {
      postCode: "",
      age: "",
      gender: "",
    },
  };

  handleSubmit = userInfo => {
    this.setState({ userInfo });
  };

  // change this to display something if the api is still loading
  render() {
    return (
      <Router>
        <>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/trials"
              render={props => <Results {...props} userInfo={this.state.userInfo} />}
            />

            <Route
              path="/basic-info"
              render={props => <BasicInfo {...props} onSubmit={this.handleSubmit} />}
            />
            <Route path="/trials/:trial" component={SingleResult} />
            <Route path="/about" component={About} />
            <Route path="/faq" component={Faq} />
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;

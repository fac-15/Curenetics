import React from 'react';
import './app.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Results from '../Results/Results';
import BasicInfo from '../BasicInfo/BasicInfo';
import SingleResult from '../SingleResult/SingleResult';


import {BrowserRouter as Router, Route, Link} from "react-router-dom";


class App extends React.Component {
  state = {
    userinfo: {},
    results: []
  };
  render() {

    return (
      <>
        <Header />
        <Router>
        <>
        <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/results">Results</Link>
           </li>
           <li>
             <Link to="/single-result">Single Result</Link>
           </li>
           <li>
             <Link to="/basic-info">Basic Info</Link>
           </li>
         </ul>

          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
          <Route path="/basic-info" component={BasicInfo} />
          <Route path="/single-result" component={SingleResult} />
        </>
        </Router>
      </>
    );
  }
}

export default App;

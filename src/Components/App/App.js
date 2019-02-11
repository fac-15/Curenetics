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
    results: [],
    isLoaded: false
  };
  componentDidMount() {
    fetch("http://35.234.148.3:8090/data/trials/uk/YO18/10/m/70/.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            results: result,
            isLoaded: true
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
  }

  render() {
if (this.state.isLoaded){
  // console.log(this.state.results);
}
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
          <Route path="/results" component={()=><Results results={this.state.results}/>}  />
          <Route path="/basic-info" component={BasicInfo} />
          <Route path="/single-result" component={SingleResult} />
        </>
        </Router>
      </>
    );
  }
}

export default App;

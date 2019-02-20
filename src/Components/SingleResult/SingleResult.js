import React from "react";

import StartingDate from "../Card/StartingDate";
import Phase from "../Card/Phase";
import Summary from "../Card/Summary";
import Expenses from "../Card/Expenses";
import Keywords from "../Card/Keywords";
import SaveButton from "../Card/SaveButton";

import { Link } from "react-router-dom";

import "./single-result.css";

const SingleResult = props => {
  // need to make the result persist on page refresh, it currently doesn't
  // results achieves this by re- running the api call with either default values, or user entered values
  // - these are stored in app.js
  // - currently can only pass in data from props - on a click event

  let item;

  // 1. page refreshed or visited previously:
  // if there are no params, try to get item from local storage
  if (!props.location.params) {
    item = JSON.parse(localStorage.getItem(`"${props.location.pathname}"`));
  }

  // 2. click directly from results
  // if there are params, add to local storage
  else {
    item = props.location.params.item;
    localStorage.setItem(JSON.stringify(props.location.pathname), JSON.stringify(item));
  }

  const title = item.Keywords ? (
    <h3>{item.Keywords[0]}</h3>
  ) : (
    <h3 className="missing-data">Data Missing From API</h3>
  );

  return (
    <section className="main-section single-view">
      <Link className="back-link" to="/trials">
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

      <div className="small-card">
        <div className="card-inner">
          <div className="save-pdf">
            <div className="card-row">
              <div />
              <div>{title}</div>
            </div>
            <StartingDate />
            <Phase />
            <Expenses />
            <Summary />
            <Keywords data={item.Keywords} />
          </div>
          <SaveButton />
        </div>
      </div>
    </section>
  );
};
export default SingleResult;

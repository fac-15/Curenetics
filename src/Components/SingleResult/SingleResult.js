import React from "react";

import StartingDate from "../Card/StartingDate";
import Phase from "../Card/Phase";
import Summary from "../Card/Summary";
import Keywords from "../Card/Keywords";
import SaveButton from "../Card/SaveButton";

import { Link } from "react-router-dom";

import "./single-result.css";

const SingleResult = props => {
  console.log(props);

  const { item } = props.location.params;
  const index = props.location.params.item.IDInfo.OrgStudyID;

  const title = item.Keywords ? (
    <h3>{item.Keywords[0]}</h3>
  ) : (
    <h3 className="missing-data">Data Missing From API</h3>
  );

  // missing-data
  return (
    <section className="main-section single-view">
      <Link className="back-link" to="/results">
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
            <Summary />
            <Keywords data={item.Keywords} style={{ padding: "100" }} />
          </div>
          <SaveButton />
        </div>
      </div>
    </section>
  );
};
export default SingleResult;

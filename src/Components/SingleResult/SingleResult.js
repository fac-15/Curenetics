import React from "react";
// import "../Results/results.css";
import "./single-result.css";

import { Link } from "react-router-dom";

const SingleResult = props => {
  console.log(props);
  return (
    <section className="main-section">
      <h2>Single Result to go here</h2>
      {/* add a # to link to id of the result the user came from in the previous results view */}
      <Link to="/results" className="back-link">
        <svg
          aria-labelledby="back-button"
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 48 48"
        >
          <title id="back-button" lang="en">
            Back to results
          </title>
          <path d="M40 22H15.66l11.17-11.17L24 8 8 24l16 16 2.83-2.83L15.66 26H40v-4z" />
        </svg>
      </Link>
    </section>
  );
};

// import "../Results/Results";
// import { Results } from "../Results/Results";

// export class SingleResult extends React.Component {
//   render() {
//     const text = "Single Result here";
//     console.log(this.props);
//     return (
//       <div className="small-card">
//         <p>In a new Component!</p>
//         <p>{text}</p>
//         <div>{this.props.item}</div>
//       </div>
//     );
//   }
// }

// function single(Component){
//   render() {
//     const text = "Single Result here";
//     console.log(this.props);
//     return (
//       <div className="small-card">
//         <p>In a new Component!</p>
//         <p>{resultsList}</p>
//         <div>{this.props.item}</div>
//       </div>
//     );
//   }
// }
export default SingleResult;

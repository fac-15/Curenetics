import React from "react";
// import "../Results/results.css";
import "./single-result.css";

import { Link } from "react-router-dom";

const SingleResult = props => {
  console.log(props);
  return (
    <section className="main-section">
      <h2>Single Result to go here</h2>
      {/* {displayResults} */}
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

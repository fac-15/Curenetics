import React from "react";
// import "./small-card.css";
// import { Link } from "react-router-dom";

const SmallCard = props => {
  const back = require("./arrow-backward.svg");
  const forward = require("./arrow-forward.svg");
  const tick = require("./tick.svg");
  const calendar = require("./calendar.svg");
  const marker = require("./marker.svg");
  const file = require("./summary-file.svg");

  //   console.log(props);
  //   const title = props.appName;

  return <article className="card-small">{back}</article>;
};

export default SmallCard;

import React from "react";
import { withRouter } from "react-router-dom";

import "./basic-info.css";

class BasicInfo extends React.Component {
  state = {
    gender: "m",
    postCode: "",
    age: "",
    consent: false,
  };

  handleOptionChange = event => {
    this.setState({ gender: event.target.value });
  };

  handlePostCode = event => {
    this.setState({ postCode: event.target.value });
  };

  handleAgeChange = event => {
    this.setState({ age: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { gender, postCode, age, consent } = this.state;
    if (consent === false) {
      this.props.history.push("/results");
    } else {
      if (!gender || !postCode || !age || consent === null) {
        alert("all fields must be filled");
      } else {
        if (this.state.consent === true) {
          this.props.onSubmit(this.state);
          this.props.history.push("/results");
        }
      }
    }
  };

  render() {
    return (
      <section className="main-section">
        <h1>Basic Information</h1>
        <form action="/results">
          <h4>Post Code *</h4>
          <input onChange={this.handlePostCode} type="text" />
          <h4>Age *</h4>
          <input type="number" onChange={this.handleAgeChange} />
          <h4>Gender</h4>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="f"
                checked={this.state.gender === "f"}
                onChange={this.handleOptionChange}
              />
              female
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="m"
                checked={this.state.gender === "m"}
                onChange={this.handleOptionChange}
              />
              male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="o"
                checked={this.state.gender === "o"}
                onChange={this.handleOptionChange}
              />
              other
            </label>
          </div>
          <div className="small-card">
            <p>Are you ok with us using your selection to filter results for you?</p>
            <div className="button-spacing">
              <button
                type="button"
                className="general-button consent-button"
                onClick={() => this.setState({ consent: true })}
              >
                Yes
              </button>
              <button
                type="button"
                className="general-button consent-button"
                onClick={() => this.setState({ consent: false })}
              >
                No
              </button>
            </div>
          </div>

          <button className="general-button submit-button" onClick={e => this.handleSubmit(e)}>
            View Results
          </button>
        </form>
      </section>
    );
  }
}

export default withRouter(BasicInfo);

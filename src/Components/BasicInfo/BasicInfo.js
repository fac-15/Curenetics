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
        <form action="/results" className="basic-form">
          <h3 className="form-text">Post Code *</h3>
          <input onChange={this.handlePostCode} type="text" />
          <h3 className="form-text">Age *</h3>
          <input type="number" onChange={this.handleAgeChange} />
          <p className="form-text">Gender</p>
          <div className="row">
            <label className="radio-container">
              <input
                type="radio"
                value="f"
                checked={this.state.gender === "f"}
                onChange={this.handleOptionChange}
              />
              <span className="checked">Female</span>
            </label>
            <label className="radio-container">
              <input
                type="radio"
                value="m"
                checked={this.state.gender === "m"}
                onChange={this.handleOptionChange}
              />
              <span className="checked">Male</span>
            </label>
            <label className="radio-container">
              <input
                type="radio"
                value="o"
                checked={this.state.gender === "o"}
                onChange={this.handleOptionChange}
              />
              <span className="checked">Other</span>
            </label>
          </div>
          <div className="consent-card">
            <p>Are you ok with us using your selection to filter results for you?</p>
            <div className="button-spacing">
              <button
                type="button"
                className={this.state.consent ? "consent-button toggled" : "consent-button"}
                onClick={() => this.setState({ consent: true })}
              >
                Yes
              </button>
              <button
                type="button"
                className={this.state.consent ? "consent-button" : "consent-button toggled"}
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

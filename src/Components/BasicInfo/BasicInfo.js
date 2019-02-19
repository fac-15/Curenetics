import React from "react";
import { withRouter } from "react-router-dom";

import "./basic-info.css";

class BasicInfo extends React.Component {
  state = {
    gender: "m",
    postCode: "",
    age: "",
    consent: false,
    ageValid: true,
    postCodeValid: true,
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

    // regex to test valid postcode
    const postCodeChecker = /([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))s?[0-9][A-Za-z]{2})/;
    // remove postcode spaces
    const postCodeMatch = postCode.replace(/\s/g, "").match(postCodeChecker);
    //console.log("no spaces: ", postCodeMatch);

    // go to all results - no consent
    if (consent === false) {
      this.props.history.push("/trials");
    }
    // consent not given
    else {
      // postcode
      if (!postCode || !postCodeMatch) {
        // need to check if postcode is valid, if not it breaks the api call
        this.setState({ postCodeValid: false });
      }

      // age
      // - sometimes works - type inferral?
      else if (!age || age > 150) {
        this.setState({ ageValid: false });
      }

      // one or more fields filled in: get specific results
      else {
        if (this.state.consent === true) {
          this.props.onSubmit(this.state);
          this.props.history.push("/trials");
        }
      }
    }
  };

  render() {
    return (
      <section className="main-section">
        <h1>Basic Information</h1>
        <form action="/trials" className="basic-form">
          <h3 className="form-text">Post Code *</h3>
          <input
            onChange={this.handlePostCode}
            type="text"
            className={this.state.postCodeValid ? "text-input" : "text-input text-invalid"}
          />
          <h3 className="form-text">Age *</h3>
          <input
            type="number"
            onChange={this.handleAgeChange}
            className={this.state.ageValid ? "text-input" : "text-input text-invalid"}
          />

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

import React from "react";
import "./basic-info.css";

class BasicInfo extends React.Component {
  state = {
    gender: "m",
    postCode: "",
    age: "",
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

  render() {
    return (
      <section className="main-section">
        <h2>BasicInfo</h2>
        <form>
          <h4>Post Code</h4>
          <input onChange={this.handlePostCode} type="text" />
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
          <h4>Age</h4>
          <input type="number" onChange={this.handleAgeChange} />
        </form>
        <section>
          <p>Are you ok with us using your selection to filter results for you?</p>
          <button onClick={() => this.props.onSubmit(this.state)}>Yes</button>
          <button>No</button>
        </section>
      </section>
    );
  }
}

export default BasicInfo;

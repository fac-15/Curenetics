import React from "react";
import "./basic-info.css";

class BasicInfo extends React.Component {
  state = {
    selectedGender: "other",
    postCode: "",
    age: "",
  };

  handleOptionChange = event => {
    this.setState({ selectedGender: event.target.value });
  };

  handlePostCode = event => {
    this.setState({ postCode: event.target.value });
  };

  handleAgeChange = event => {
    this.setState({ age: event.target.value });
    console.log(this.state.age);
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
                value="female"
                checked={this.state.selectedGender === "female"}
                onChange={this.handleOptionChange}
              />
              female
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="male"
                checked={this.state.selectedGender === "male"}
                onChange={this.handleOptionChange}
              />
              male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="other"
                checked={this.state.selectedGender === "other"}
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
          <button>Yes</button>
          <button>No</button>
        </section>
      </section>
    );
  }
}

export default BasicInfo;

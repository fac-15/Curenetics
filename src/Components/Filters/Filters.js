import React from "react";
import Dropdown from "./Dropdown";
import Viewed from "./Viewed";

import "./Filters.css";

class Filters extends React.Component {
  render() {
    // console.log(this.props.numberViewed);
    // const phase = (
    //   <svg
    //     aria-labelledby="phase"
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="48"
    //     height="48"
    //     viewBox="0 0 48 48"
    //   >
    //     <title id="phase" lang="en">
    //       Trial Phase:
    //     </title>
    //     <path d="M32.49 15.51C30.14 13.17 27.07 12 24 12v12l-8.49 8.49c4.69 4.69 12.28 4.69 16.97 0 4.69-4.69 4.69-12.29.01-16.98zM24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.96 20-20c0-11.05-8.95-20-20-20zm0 36c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
    //   </svg>
    // );

    // const pin = (
    //   <svg
    //     aria-labelledby="location"
    //     xmlns="http://www.w3.org/2000/svg"
    //     width="48"
    //     height="48"
    //     viewBox="0 0 48 48"
    //   >
    //     <title id="location" lang="en">
    //       Location
    //     </title>
    //     <path d="M24 4c-7.73 0-14 6.27-14 14 0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14zm0 19c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
    //   </svg>
    // );

    const tick = (
      <svg
        aria-labelledby="recruiting"
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 48 48"
      >
        <title id="recruiting" lang="en">
          Recruiting
        </title>
        <path d="M24 4C12.95 4 4 12.95 4 24c0 11.04 8.95 20 20 20 11.04 0 20-8.96 20-20 0-11.05-8.96-20-20-20zm-4 30L10 24l2.83-2.83L20 28.34l15.17-15.17L38 16 20 34z" />
      </svg>
    );
    return (
      <div className="filters">
        <h1> Search Filters: </h1>
        <Dropdown
          title={[
            { title: "Recruiting: Any", value: "" },
            { title: "Recruiting: Open", value: true },
          ]}
          icon={tick}
          handleChange={this.props.onChange}
        />
        <Viewed recentlyViewed={this.props.onClick} toggle={this.props.numberViewed} />
      </div>
    );
  }
}

export default Filters;

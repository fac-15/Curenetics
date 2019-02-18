import React from "react";
import { render } from "react-testing-library";
import Location from "../Location";

describe("Location", () => {
  test("render the location component - with props", () => {
    // pass in props to location
    const props = {
      data: {
        Facility: {
          Address: {
            City: "Aberdeen",
            Country: "United Kingdom",
            State: "Aberdeenshire",
            Zip: "AB25 2ZD",
          },
          Name: "GSK Investigational Site",
        },
      },
    };

    render(<Location {...props} />);
  });
});

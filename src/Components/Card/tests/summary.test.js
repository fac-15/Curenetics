import React from "react";
import { render } from "react-testing-library";
import Summary from "../Summary";

describe("Summary", () => {
  test("render the summary component - without props", () => {
    render(<Summary />);
  });
});

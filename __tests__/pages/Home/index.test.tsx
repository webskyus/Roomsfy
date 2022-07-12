import React from "react";
import { render, screen } from "../../utils/test.utils";
import HomePage from "pages";

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<HomePage />);

    const textToFind = "Hello World!"
    const heading = screen.getByText(textToFind);

    expect(heading).toBe(heading);
  });
});
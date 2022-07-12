import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("renders content", () => {
    const snapshot = render(<App />);
    expect(snapshot.container).toBeVisible();
  });
});

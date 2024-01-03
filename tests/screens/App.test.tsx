// __tests__/App-test.tsx

import { render } from "@testing-library/react-native";
import React from "react";

import App from "../../App";

describe("App", () => {
  it("renders correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText("Welcome to React")).toBeTruthy();
  });

  // Add more tests to interact with your app!
});

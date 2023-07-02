import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App", () => {
  test("APP container is rendered", () => {
    render(<App title="App" />);
    const divElement = screen.getByTitle(/App/i);
    expect(divElement).toBeInTheDocument();

    // check if App components renders headline
  });
});

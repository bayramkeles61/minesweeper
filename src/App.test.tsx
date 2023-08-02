import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

it("should have hello world", () => {
  render(<App />);
  const message = screen.queryByText(/Hello World/i);
  expect(message).toBeVisible();
});

describe("App", () => {
  it("Renders Bayram KELES", () => {
    // ARRANGE
    render(<App />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole("heading", {
        level: 2,
      }),
    ).toHaveTextContent("Bayram KELES");
  });
});

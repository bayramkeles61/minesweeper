import { it, expect } from "vitest";
import { render } from "@testing-library/react";

import GameName from "./GameName";

it("GameName renders correctly", () => {
  const { asFragment } = render(<GameName>minesweeper</GameName>);

  expect(asFragment()).toMatchSnapshot();
});

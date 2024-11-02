/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import Home from "@/app/(site)/page";

describe("Home", () => {
  it("render Home", () => {
    render(<Home />);
  });
});
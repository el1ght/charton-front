/**
 * @jest-environment jsdom
 */

jest.mock("next/router", () => ({
  userRouter: jest.fn(),
}));

describe("Home", () => {
  it("render Home", () => {});
});

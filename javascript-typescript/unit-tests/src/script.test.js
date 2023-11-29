import { sum, fetchData, throwError } from "./script";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ address: { city: "East Rickiview" } }),
  })
);
describe("script test", () => {
  it("should sum two numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

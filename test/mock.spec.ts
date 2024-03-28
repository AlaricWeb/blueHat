import { expect, test, it, describe } from "vitest";
import { query } from "!/restful";
describe("查询", () => {
  it("query filter ", () => {
    const module = {
      x: 42,
      getX: function () {
        return this.x;
      },
    };
    const unbound = module.getX;
    const boundGet = unbound.bind(module);
    console.log(boundGet());
    // unbound();
    expect(1 + 1).toBe(2);
  });
});

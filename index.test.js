const sort = require("./index");
/*
### Objective

Imagine you work in Thoughtful’s robotic automation factory, and your objective is to write a function for one of its robotic arms that will dispatch the packages to the correct stack according to their volume and mass.

### Rules

Sort the packages using the following criteria:

- A package is **bulky** if its volume (Width x Height x Length) is greater than or equal to 1,000,000 cm³ or when one of its dimensions is greater or equal to 150 cm.
- A package is **heavy** when its mass is greater or equal to 20 kg.

You must dispatch the packages in the following stacks:

- **STANDARD**: standard packages (those that are not bulky or heavy) can be handled normally.
- **SPECIAL**: packages that are either heavy or bulky can't be handled automatically.
- **REJECTED**: packages that are **both** heavy and bulky are rejected.

### Implementation

Implement the function **`sort(width, height, length, mass)`** (units are centimeters for the dimensions and kilogram for the mass). This function must return a string: the name of the stack where the package should go.
 */
describe("index.js", () => {
  describe("when dealing with a STANDARD package", () => {
    it("prints the **STANDARD** message", () => {
      const result = sort(10, 10, 10, 10);
      expect(result).toEqual("**STANDARD**");
    });
  });
  describe("when dealing with SPECIAL package", () => {
    describe("when a package is bulky", () => {
      it("prints the **SPECIAL** message when the width by height by length is eq or greater to 1,000,000", () => {
        const result = sort(100, 100, 100, 4);
        expect(result).toEqual("**SPECIAL**");
      });
      it("prints the **SPECIAL** message when a dimension is equal or greater than 150", () => {
        const result = sort(10, 150, 14, 4);
        expect(result).toEqual("**SPECIAL**");
      });
    });
    describe("when a package is too heavy", () => {
      it("prints the **SPECIAL** message when the mass of a package is at or over 20kg", () => {
        const result = sort(1, 1, 1, 20);
        expect(result).toEqual("**SPECIAL**");
      });
    });
  });
  describe("when dealing with a REJECTED package", () => {
    it("prints the **REJECTED** message when the volume is over 1000000 and mass is over 20", () => {
      const result = sort(120, 120, 120, 22);
      expect(result).toEqual("**REJECTED**");
    });
    it("prints the **REJECTED** when one of the dimensions is over 150 and mass is over 20", () => {
      const result = sort(160, 12, 12, 22);
      expect(result).toEqual("**REJECTED**");
    });
  });

  describe("When dealing with invalid inputs", () => {
    it("returns an error when any of the values are not integers", () => {
      expect(() => sort("a", "b", "c", "d")).toThrow(
        "Invalid inputs: Values must be an Integer.",
      );
    });

    it("returns an error when any of the values are equal or less than 0", () => {
      expect(() => sort(0, -1, -2, -3)).toThrow(
        "Invalid inputs: Values must be greater than Zero.",
      );
    });
  });
});

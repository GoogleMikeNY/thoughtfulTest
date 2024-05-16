# Thoughtful Sorting function

Code test taken from the notion link [Here](https://thoughtfulautomation.notion.site/Technical-Screen-b61b6f6980714c198dc49b91dd23d695).
Here's a copy of the prompt: 

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

Requirements: 
```
node v20.12.2
```

## Installing packages
Within the project, run `npm install` to install necessary packages (Jest and Prettier)

## Running tests
`npm run test` will run all tests.

Here's a preview:
```
 PASS  ./index.test.js
  index.js
    when dealing with a STANDARD package
      ✓ prints the **STANDARD** message (3 ms)
    when dealing with SPECIAL package
      when a package is bulky
        ✓ prints the **SPECIAL** message when the width by height by length is eq or greater to 1,000,000 (1 ms)
        ✓ prints the **SPECIAL** message when a dimension is equal or greater than 150 (1 ms)
      when a package is too heavy
        ✓ prints the **SPECIAL** message when the mass of a package is at or over 20kg
    when dealing with a REJECTED package
      ✓ prints the **REJECTED** message when the volume is over 1000000 and mass is over 20 (1 ms)
      ✓ prints the **REJECTED** when one of the dimensions is over 150 and mass is over 20
    When dealing with invalid inputs
      ✓ returns an error when any of the values are not integers (12 ms)
      ✓ returns an error when any of the values are equal or less than 0 (1 ms)
```

If you have any feedback, please feel free to email me at mnunez903@gmail.com. Thanks!
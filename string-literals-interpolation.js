let obj ={
    name: "pen",
    price: 20
}

console.log(`the price of ${obj.name} is ${obj.price}`);

console.log(`the sum is ${1+2+3}`)

/*
Difference between Template Literals and String Interpolation

1. Template Literals
- A JavaScript syntax feature.
- Strings written using backticks (` `) instead of quotes.
- They allow:
  - Multiline strings
  - Embedded expressions (string interpolation)

Example:
const msg = `Hello world`;

Think of template literals as the "container" or tool.

2. String Interpolation
- A feature provided by template literals.
- Allows inserting variables or expressions inside a string.
- Uses the ${} syntax.
- Works ONLY inside template literals.

Example:
const name = "Alex";
const msg = `Hello ${name}`;

Key Difference:
- Template literals = the syntax (backticks)
- String interpolation = a feature inside template literals

Template literals enable interpolation, but interpolation cannot exist without them.
*/

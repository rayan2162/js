// Original array with numbers
let arr = [1, 2, 3, 4, 5];

// map() is used to **transform each element of an array**
// It takes a function and applies it to every item, returning a new array
let newArr = arr.map((val) => {
    // Multiply each element by 2
    return val * 2;
});

// Print the new array to the console
console.log(newArr); // Output: [2, 4, 6, 8, 10]

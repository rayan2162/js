// The filter() method creates a new array with all elements that pass a test implemented by a function.

// Original array containing numbers from 1 to 10
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the 'filter' method to create a new array with only even numbers
// 'filter' takes a callback function that returns true for elements we want to keep
let newArr = arr.filter((val) => {
    // Check if the number is divisible by 2 (even)
    return val % 2 == 0;
});

// Print the new array to the console
// Output: [2, 4, 6, 8, 10]
console.log(newArr);

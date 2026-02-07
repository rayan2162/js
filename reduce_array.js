  // reduce takes an array and turns it into one single value.


// An array of numbers
const numbers = [1, 2, 3, 4];

// Use reduce to combine all numbers into ONE value
const sum = numbers.reduce((total, num) => {
  // total = accumulator (stores the running result)
  // num   = current number from the array

  // Add the current number to the total
  return total + num;

  // The returned value becomes the new "total"
}, 0); 
// 0 is the initial value of "total"
// Before the loop starts: total = 0

console.log(sum); // 10

// An array of numbers
let arr = [1, 2, 3, 4, 5];

// forEach() is a METHOD of the array object
// It is used to run a function once for each element in the array
arr.forEach(function printarr(val) {

    // This FUNCTION is a CALLBACK FUNCTION
    // It is passed as an argument to the forEach() method
    // forEach() automatically calls this function for every array element

    // 'val' represents the current element of the array
    console.log(val);

});


arr.forEach((value)=>{
    console.log(value);
})

// these are 3 parameters can be passed into forEach
// index is index
arr.forEach((value, index, arr)=>{
    console.log(value, index, arr);
})
function printArr(arr){
    console.log();
    for(let i of arr){
        console.log(i);
    }
    console.log();
}

let arr = [1,2,3,4,5];

// push
arr.push(6);
printArr(arr);


// pop
arr.pop()
printArr(arr);

// convert into string
arr.toString();
console.log(arr);
console.log(typeof(arr));


// concat
let ay = [6,7,8,9,10];
console.log(arr.concat(ay));

// adding element at begining of array
arr.unshift(0)
printArr(arr);

// deleting first element from begining
arr.shift();
printArr(arr);

// slice return piece of array
console.log(arr.slice(2,3));

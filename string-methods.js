let str = "   Hello World   "
let ing = "hi"

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.trim()); // removes white spaces from before and endside of senctence

console.log(str.slice(5,9));
console.log(str.slice(5));

console.log(str.concat(ing));
console.log(`${str.trim()} ${ing}`);

console.log(str.search("Hello"));

console.log(str.replace("l", "J"));
console.log(str.replaceAll("l", "j"));

console.log(str.charAt(3));
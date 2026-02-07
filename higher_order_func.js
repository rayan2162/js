// A higher-order function (or method) is a function that does at least one of these:

// Takes another function as an argument, or

// Returns a function

function greet() {
    return function () {
        console.log("Hello!");
    };
}

let sayHello = greet(); // greet returns a function
sayHello();             // calls the returned function


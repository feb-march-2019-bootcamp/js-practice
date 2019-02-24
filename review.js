'use strict';
// console.log(x); // works with var, error with let

// Hoisting (or rising)
var x = 10;

// let x = 20;

let arr = [];

for (var i = 0; i < 3; i++) {
  arr.push(function() {
    // wil always output 3, because i is not local to the for loop
    console.log(i);
  });
}

// arr[0]() // will output 3

// Conditionals

if (0) {
  console.log("It's zero");
} else if (null || 2 === 3) {
  console.log("It's null");
} else if (false && false) {
  console.log("It's false");
} else if (NaN || undefined) {
  console.log("It's not a number");
} else {
  console.log("none of them");
}

// undefined OR NOT true
console.log(undefined || !true);

// null AND true
console.log(null && true);

// Loops

const a = ["a", "b", "c", "d"];
a[-1] = "z";

// Loop through keys (index)
for (const x in a) {
  console.log(x);
}

// Loop through values
for (const x of a) {
  console.log(x);
}

// Objects

const obj = {
  name: "Ali"
};

const obj2 = {
  name: "Ali"
};

console.log(obj === obj2); // false

const person = {
  name: "Ali",
  age: 20,
  id: 200,
  address: {
    street: "Shorsh st.",
    city: "Erbil"
  }
};

person.name = "Mohammed";
console.log(person.name); // Mohammed
console.log(person.address.street); // Shorsh st.

person["address"]["street"] = "100m";
console.log(person["address"]["street"]); // 100m
console.log(person["address"]["city"]); // Erbil

// Looping through the keys of the object
console.log("Person properties: ");
for (const x in person) {
  console.log(x);
}

// Arrays

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers.map(x => Math.sqrt(x)));

console.log(numbers.filter(x => x <= 2));

console.log(numbers.reduce((prev, c) => prev + "|" + c.toString()));

// Functions
const func = function func(param, param2) {
  console.log("Value of this: ", this);
  console.log(arguments);
};

func(1, "x", 3, 4, "b", "z", {}, true, false, function() {});
func.call({}, 'z', 'x', [], {})
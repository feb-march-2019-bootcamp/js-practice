'use strict';

const obj = {
    name: 'I am an object',
    func(greeting) {
        // .... 1000 line
        console.log(greeting, this.name);
    }
};

const obj2 = {
    name: 'Second Object'
};

const func = obj.func;

// this = obj2
// func.call(obj2, 'Hello');

const input = ['a', 'b', 'c'];
// Array.prototype.push.apply(obj2, input)
// same as:
// Array.prototype.push.call(obj2, ...input)

const pushToObj2 = Array.prototype.push.bind(obj2)

// pushToObj2(...input)
// pushToObj2(...input)
// pushToObj2(...input)

// same as calling next line multiple times
// Array.prototype.push.call(obj2, ...input)

// console.log(obj2);

// Array.prototype.splice.call(obj2, 1, 1)

// console.log(obj2)

// console.log(Array.prototype.slice.call(obj2).map(x => x.toUpperCase()))


const arr = {0: 'a', 1: 'b', 2: 'c'};
arr.__proto__ = {length: 3}

// console.log(arr)

// Array.prototype
//     .forEach.call(arr, x => console.log(x));

const BIND = function(func, thisArg) {
    return (...args) => {
        return func.apply(thisArg, args);
    }
}
const a = [1,2,3,4,5,6];

const forEachOfA = Array.prototype.forEach.bind(a)

forEachOfA(function(x) {
    console.log(this.name, x)
}, {name: 'SECOND ARG'});

console.log('My BIND')
const forEachOfA2 = BIND(Array.prototype.forEach, a);

setTimeout(() => {
    forEachOfA2(function(x) {
        console.log(this.name, x)}
    , {name: 'SECOND ARG'})
}, 2000)
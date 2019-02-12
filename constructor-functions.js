class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        
        // Copy for each object
        this.getAge = function () {
            return this.age;
        };
    }

    // Only one copy for all objects
    getName() {
        return this.name;
    }
}

const Student2 = function(name, age) {
    this.name = name;
    this.age = age;

    // Copy for each object
    this.getAge = function() {
        return this.age;
    }

   
}

// Only one copy for all objects
Student2.prototype.getName = function() {
    return this.name;
}

const s = new Student2('Ali', 20);
const s2 = new Student2('Ali', 20);

s.__proto__.getName = function() {
    return 'Hello World'
}

// They all equal
// console.log(s.__proto__ === s2.__proto__)
// console.log(s2.__proto__ === Student2.prototype)

// Anything not only function
// Object.prototype.foo = 'bar'
// console.log(s.foo)

// Adding get foo to the __proto__ chain
Object.prototype.getFoo = function() {
    return 'foo';
}

console.log("S Before: ", s)

// Breaking the proto chain
// s.__proto__ = {getFoo() {return 'baz'}}

console.log("S after: ", s)
console.log('Has own property', s.hasOwnProperty('getFoo'))

// Trying to call getFoo
console.log("Get name: ",s.getFoo())

console.log("Proto: ", s.__proto__)
console.log("Proto Has own property: ", s.__proto__.hasOwnProperty('getFoo'))

console.log("Proto of proto: ", s.__proto__.__proto__)
console.log("Proto of proto Has own property: ", s.__proto__.__proto__.hasOwnProperty('getFoo'))

console.log("Proto of proto of proto: ", s.__proto__.__proto__.__proto__)


console.log(s.getAge === s2.getAge) // false, because each is a copy
console.log(s.getName === s2.getName) // true, because of that all of them use same copy


const o = {}
o.__proto__ = Student2.prototype
console.log('O: ', o)
console.log(o.getName())
console.log(o.getFoo())

String.prototype.getFoo = function() {
    return 'bar'
}
console.log('String:', ''.getFoo())

console.log('Number', (2).getFoo());
console.log('console.log', console.log.getFoo());
console.log('console', console.getFoo());
console.log('console', global.getFoo());

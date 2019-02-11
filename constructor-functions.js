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

function Student2(name, age) {
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


const s = new Student('Ali', 20);
const s2 = new Student('Ali', 20);

console.log(s.getAge === s2.getAge) // false, because each is a copy
console.log(s.getName === s2.getName) // true, because of that all of them use same copy

'use strict';

const obj = {
    name: 'Student',
    getName() {
        const self = this;
        return [...this.name].map( (x) => {
            return self === this;
        })
    }
}

// console.log(obj.getName())
class A 
{
    constructor() {
        this.name = 'Ali';
        this.getName = () => this.name
    }
}

const a = new A();
a.getName2 = () => this.name;
console.log(a.getName())
console.log(a.getName2())

const Student = (name) => {
    this.name = name
}

new Student('Ali');
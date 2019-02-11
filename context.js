'use strict';

const arr = [1,2,4,5,645];

const obj = {
    name: 'I am an object',
    func() {
        console.log(this.name)
    }
}
const func2 = obj.func;

// Error in strict mode
func2()

const obj2 = {name: 'I am second object', func: obj.func}
obj2.func();
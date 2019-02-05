import Car from './car';
import Engine from './engine';
import Color from "./color";

const car = new Car('Toyota', 2012, new Engine('v8'), 4, new Color('red'));
const car2 = new Car('Toyota', 2012, new Engine('v8'), 4, new Color('red'));

// const engine = new Engine('v12');
// engine.whatIsThis = car.whatIsThis;

// console.log(engine.whatIsThis() === engine)

car.add = [].push;

car.add(1)
car.add('Hello World')
car.add({name: 'third'})

console.log(car)
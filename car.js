import Engine from './engine';
import Color from './color';

export default class Car
{
    constructor(make, year, engine, tires, color) {
        if (! (color instanceof Color)) {
            throw Error('Please pass a valid color object');
        }

        if (! (engine instanceof Engine)) {
            throw Error('Please pass a valid engine object');
        }

        this.make = make;
        this.year = year;
        this.engine = engine;
        this.tires = tires;
        this.color = color;

        this.fuel = 0;
    }

    startEngine() {
        if (this.fuel <= 0) return;
        
        this.engine.start();
    }

    stopEngine() {
        this.engine.stop();
        this.speed = 0;
    }

    drive(speed) {
        if (! this.engine.isStarted()) return;
        this.fuel--;
        this.speed = speed;

        if (this.fuel <= 0) {
            return this.stopEngine();
        }
    }

    refillFuel(amount) {
        this.fuel += amount;
    }

    whatIsThis() {
        return this;
    }
}


// create a class for Car name
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // adding a method
    age(x) {
        return x - this.year;
    }
}

const date = new Date();
let year = date.getFullYear();

// Create a Object for the Car Class
const mycar1 = new Car("Ford", 2018);
const mycar2 = new Car("Audi", 2022);

console.log("My car is " + mycar1.age(year) + " year old");
// console.log(mycar2);
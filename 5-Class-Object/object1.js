function Person(name, age) {
    this.name = name,
    this.age = age
}

const person = new Person("Jhon", 50);

// adding property to constructor function
Person.prototype.city = "Bangalore";

// adding method to constructor function
Person.prototype.greet = function() {
    console.log('hello', + ' ' + this.name);
}


console.log(Person.prototype);
console.log(person.city);
console.log(person.__proto__);
person.greet()
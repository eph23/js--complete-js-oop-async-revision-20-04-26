'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Ephraim', 1988);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(eph);
console.log(eph instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

eph.calcAge();
console.log(eph.__proto__);
console.log(eph.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(eph));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(eph.species);

console.log(eph.hasOwnProperty('firstName'));
console.log(eph.hasOwnProperty('species'));

console.log(eph.__proto__);
console.log(eph.__proto__.__proto__);
console.log(eph.__proto__.__proto__.__proto__);

const arr = [3, 6, 8, 7, 9, 1, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__)
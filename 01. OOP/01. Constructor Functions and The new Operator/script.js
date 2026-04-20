'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const eph = new Person('Ephraim', 1988);
const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(eph);
console.log(matilda);
console.log(jack);

console.log(eph instanceof Person);

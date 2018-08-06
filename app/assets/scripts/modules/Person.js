/*
function Person(fullName, favColor) {
  this.name = fullName;
  this.favoriteColor = favColor;
  this.greet = function () {
    console.log('Hello! I\'m ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
  }
}

module.exports = Person;
*/
//ES2015 syntax

class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log('Hello! I\'m ' + this.name + ' and my favorite color is ' + this.favoriteColor + '.');
  }
}

export default Person;
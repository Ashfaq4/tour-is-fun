//var Person = require('./modules/Person');
var $ = require('jquery');
import Person from './modules/Person';

class Adult extends Person {
  payTaxes() {
    console.log(this.name + ' now owes $5 in tax.');
  }
}

var ashfaq = new Adult('Ashfaq', 'green');
ashfaq.greet();
ashfaq.payTaxes();

var susan = new Person('Susan', 'yellow');
susan.greet();
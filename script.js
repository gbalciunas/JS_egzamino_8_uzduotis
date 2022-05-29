/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {

  this.read = function() {
    
    /*this.a = +prompt('a = ', 10);
    this.b = +prompt('b = ', 2);*/

    this.a = (16);
    this.b = (4);

  };

  this.sum = function() {
    return this.a + this.b;
  };

  this.subtr = function() {
    return this.a - this.b;
  };

   this.mul = function() {
    return this.a * this.b;
  };

   this.divis = function() {
    return this.a / this.b;
  };
}

let calculator = new Calculator();
calculator.read();

console.log( "Suma = " + calculator.sum() );
console.log( "Skirtumas = " + calculator.subtr() );
console.log( "Daugyba = " + calculator.mul() );
console.log( "Dalyba = " + calculator.divis() );


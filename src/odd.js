const readlineSync = require("readline-sync");

let sum = 0

let x = 0

console.log();

do{

  positiveInteger = Number(readlineSync.question("Positive integer: "));

} while (positiveInteger < 1 || positiveInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInteger) || positiveInteger % 1 != 0)



do {

  x = positiveInteger % 10;

  if (x % 2 != 0) {

    sum = sum + x;

  }

  positiveInteger = positiveInteger - x

  positiveInteger = positiveInteger/10;

} while (positiveInteger >= 10);



sum = sum + positiveInteger



console.log("\n" + sum + ".\n");

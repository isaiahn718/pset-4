const readlineSync = require("readline-sync");

let sum = 0

let g = 0

console.log();

do{

  positiveInteger = Number(readlineSync.question("Positive integer: "));

} while (positiveInteger < 1 || positiveInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInteger) || positiveInteger % 1 != 0)



do {

  g = positiveInteger % 10;

  if (g % 2 != 0) {

    sum = sum + g;

  }

  positiveInteger = positiveInteger - g

  positiveInteger = positiveInteger/10;

} while (positiveInteger >= 10);



sum = sum + positiveInteger



console.log("\n" + sum + ".\n");

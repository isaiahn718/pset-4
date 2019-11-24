const readlineSync = require("readline-sync");

let reversed = "";

let g = 0

console.log();

do{

  positiveInteger = Number(readlineSync.question("Positive Integer: "));

} while (positiveInteger < Number.MIN_SAFE_INTEGER || positiveInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInteger) || positiveInteger % 1 != 0 || positiveInteger <= 0)



do {

  g = positiveInteger % 10;

  reversed = reversed + g + ", ";

  positiveInteger = positiveInteger - g

  positiveInteger = positiveInteger/10;

} while (positiveInteger > 10);



reversed = reversed + positiveInteger + "."



console.log(reversed);

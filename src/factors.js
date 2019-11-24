const readlineSync = require("readline-sync");

let positiveInteger = 0;
let x = 1;
let y = 0;
let finalResult = "";

console.log();

do {
      positiveInteger = Number(readlineSync.question("Positive integer: "));
} while (positiveInteger <= 0 || positiveInteger > Number.MAX_SAFE_INTEGER || Number.isNaN(positiveInteger) || !Number.isInteger(positiveInteger));

while (x <= Math.floor(Math.sqrt(positiveInteger))) {

    if (x <= positiveInteger) {
      y = positiveInteger % x

      if (x === Math.floor(Math.sqrt(positiveInteger))) {
        finalResult = finalResult + x + ". "
        break;
      } else if (y === 0) {
        finalResult = finalResult + x + ", " + (positiveInteger / x) + ", "
      }
      x++
    }
}


  console.log("\n" + finalResult + "\n");

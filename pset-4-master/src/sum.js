const readlineSync = require("readline-sync");



let f = 0;

let g = 0;



console.log("")



do {

     lB = Number(readlineSync.question("Lower bound: "));

     uB = Number(readlineSync.question("Upper bound: "));

} while (lB < Number.MIN_SAFE_INTEGER || lB > Number.MAX_SAFE_INTEGER || uB < Number.MIN_SAFE_INTEGER || uB > Number.MAX_SAFE_INTEGER || lB >= uB || Number.isNaN(lB) || Number.isNaN(uB) || !Number.isInteger(lB) || !Number.isInteger(uB));



for (let g = lB; g <= uB; g++) {



      if (g % 2 === 0) {



          for (g = lB; g <= uB; g+=2) {



            f = g + f;



          }

      }

      if (g % 2 !== 0) {



          for (g = lB + 1; g <= uB; g+=2) {



            f = g + f;

          }

      }

}



f = f.toLocaleString('en');



console.log("\n" + f + ".\n")

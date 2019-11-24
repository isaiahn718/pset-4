const readlineSync = require("readline-sync");

let check = 0
console.log();
do {
  nonNegativeInteger = Number(readlineSync.question("Non-negative integer: "));
} while (nonNegativeInteger < 0 || nonNegativeInteger > Number.MAX_SAFE_INTEGER || nonNegativeInteger % 1 != 0 || Number.isNaN(nonNegativeInteger))

for (i = 2; i <= nonNegativeInteger / 2; i = i + 1) {
  if (nonNegativeInteger % i == 0) {
    check = 1
  }
}
if (check == 1) {
  console.log("\nNot prime.\n")
} else if (nonNegativeInteger == 1) {
  console.log("\nNot prime.\n")
}
 else {
  console.log("\nPrime.\n")
}

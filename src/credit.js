const readlineSync = require("readline-sync");

let x = 1;
let creditNumber = 0;
let addition = 0;
const MIN = 1000000000000;
const MAX = 9999999999999999;
let creditNumber2;
let sum = 0;
let firstDigit = 0;
let secondDigit = 0;
let singularDigit = 0;
let digit = 0;

console.log();
do {
  creditNumber = Number(readlineSync.question("Number: "));
} while (creditNumber < MIN || creditNumber > MAX || Number.isNaN(creditNumber) || !Number.isInteger(creditNumber))

creditNumber2 = creditNumber;

while (creditNumber2 >= 1) {
  creditNumber2 = creditNumber2 / 10;
  digit = digit + 1;
}
firstDigit = Math.floor(creditNumber / 10 ** (digit - 1));
secondDigit = (Math.floor(creditNumber / 10 ** (digit - 2)) / 10) * 10;

for (let loop = 0; loop < digit; loop++) {
  singularDigit = (creditNumber - Math.floor(creditNumber / 10) * 10);
  creditNumber = Math.floor(creditNumber / 10);
  if (loop % 2 == 1) {
    if (singularDigit * 2 >= 10) {
      addition = addition + ((singularDigit * 2 - singularDigit * 2 % 10) / 10 + singularDigit * 2 % 10);
    } else if (singularDigit * 2 < 10) {
      addition = addition + singularDigit * 2;
    }
  } else {
    addition = addition + singularDigit;
  }
  ++x;
}

if (addition / 10 % 1 != 0) {
  console.log("\nInvalid.")
} else if (digit == 15 && (secondDigit == 34 || secondDigit == 37)) {
  console.log("\nAmex.")
} else if (digit == 16 && (secondDigit <= 55 && secondDigit >= 51)) {
  console.log("\nMastercard.")
} else if ((digit == 13 || digit == 16) && firstDigit == 4) {
  console.log("\nVisa.")
}

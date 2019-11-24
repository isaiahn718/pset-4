const readlineSync = require("readline-sync");

let fn = 0;
let x = 0;

console.log("");

do {
  fn = Number(readlineSync.question("Positive integer: "));
} while (fn < 1 || fn > 78 || Number.isNaN(fn) || !Number.isInteger(fn));

x = (Math.pow(1.618034, fn) - (Math.pow(-0.618034, fn))) / Math.sqrt(5)

if ((x * 10) % 10 < 5) {
  Math.floor(x)
}

if ((x * 10) % 10 >= 5) {
  Math.ceil(x)
}

r = x.toLocaleString('en', {minimumFractionDigits: 0, maximumFractionDigits: 0})

console.log("\n" + r + "." + "\n");

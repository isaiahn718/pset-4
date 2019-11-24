const readlineSync = require("readline-sync");

let height;
let secondHashtags;
let rowLength;
let print = "\n";
let spaces = 1;
let hashtags = 1;

console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

rowLength = height + 1;
secondHashtags = 2;

for (let x = 0; x < height; x++) {

  while (spaces <= rowLength - secondHashtags) {
    print = print + " ";
    spaces++;
  }

  while (hashtags <= secondHashtags) {
    print = print + "#";
    hashtags++;
  }

  console.log(print);
  secondHashtags++;
  print = "";
  spaces = 1;
  hashtags = 1;
}

console.log();

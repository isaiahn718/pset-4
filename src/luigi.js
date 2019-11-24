const readlineSync = require("readline-sync");
let height;
let rowLength;
let secondHashtag;
let print = "";
let spaces = 1;
let hashtags = 1;

console.log();

do {
  height = Number(readlineSync.question("Height: "));
} while (height < 1 || height > 24 || Number.isNaN(height) || !Number.isInteger(height));

rowLength = height + 1;
secondHashtag = 2;

console.log();

for (let x = 0; x < height; x++) {

  while (spaces <= rowLength - secondHashtag) {
    print = print + " ";
    spaces++;
  }

  while (hashtags <= secondHashtag) {
    print = print + "#";
    hashtags++;
  }

  print = print + "  ";
  spaces = 1;
  hashtags = 1;

  while (hashtags <= secondHashtag) {
    print = print + "#";
    hashtags++;
  }

  console.log(print);
  secondHashtag++;
  print = "";
  spaces = 1;
  hashtags = 1;
}

console.log();

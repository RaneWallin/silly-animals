const path = require("path");
const fs = require("fs");

let wordPath = path.join(__dirname, "./words");
var EOL = require("os").EOL;

(async () => {
  const files = [
    path.join(wordPath, "adverbs.txt"),
    path.join(wordPath, "adjectives.txt"),
    path.join(wordPath, "nouns.txt"),
  ];
  const badWords = fs
    .readFileSync(path.join(wordPath, "badWords.txt"), "utf8")
    .split(EOL);

  for (let file of files) {
    let words = fs.readFileSync(file, "utf8").split(EOL);
    console.log("Before: ", words.length);
    words = words.filter((word) => !badWords.includes(word));
    console.log("After: ", words.length);
    fs.writeFileSync(file, words.join(EOL));
  }
})();

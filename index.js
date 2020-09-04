const path = require("path");
const fs = require("fs");

let wordPath = path.join(__dirname, "./words");
var EOL = require("os").EOL;

const getFilename = async () => {
  let adverbFile = path.join(wordPath, "adverbs.txt");
  let adjectiveFile = path.join(wordPath, "adjectives.txt");
  let nounFile = path.join(wordPath, "nouns.txt");

  let adverbs = fs.readFileSync(adverbFile, "utf8").split(EOL);
  let nouns = fs.readFileSync(nounFile, "utf8").split(EOL);
  let adjectives = fs.readFileSync(adjectiveFile, "utf8").split(EOL);

  let adverb = getRandomWord(adverbs);
  let adjective = getRandomWord(adjectives);
  let noun = getRandomWord(nouns);

  return `${adverb}-${adjective}-${noun}`;
};

const getRandomWord = (words) => {
  let random = Math.floor(Math.random() * words.length);
  let word = words[random];

  word = word.toLowerCase();
  word = word.replace(/[^a-z]/gi, "");

  return word;
};

console.log(getFilename());

module.exports.getFilename = getFilename;

const path = require("path");
const fs = require("fs");

let wordPath = path.join(__dirname, "./words");
let EOL = require("os").EOL;

const ADVB_FILE = path.join(wordPath, "adverbs.txt");
const NOUN_FILE = path.join(wordPath, "nouns.txt");
const ADJ_FILE = path.join(wordPath, "adjectives.txt");

module.exports = (pattern = "{{adj}} {{adv}} {{n}}") => {
  let result = pattern.replace(/{{\w+}}/g, (match) => {
    let type = match.match(/(?<={{)(.+)(?=}})/);
    switch (type[0]) {
      case "adj":
        return getAdjective();
      case "adv":
        return getAdverb();
      case "n":
        return getNoun();
      default:
        return "";
    }
  });

  return result;
};

const getAdverb = () => {
  let adverbs = fs.readFileSync(ADVB_FILE, "utf8").split(EOL);

  return getRandomWord(adverbs);
};

const getNoun = () => {
  let nouns = fs.readFileSync(NOUN_FILE, "utf8").split(EOL);

  return getRandomWord(nouns);
};

const getAdjective = () => {
  let adjectives = fs.readFileSync(ADJ_FILE, "utf8").split(EOL);

  return getRandomWord(adjectives);
};

const getRandomWord = (words) => {
  let random = Math.floor(Math.random() * words.length);
  let word = words[random];

  word = word.toLowerCase();
  word = word.replace(/[^a-z]/gi, "");

  return word;
};

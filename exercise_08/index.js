import formatStringByWordsLength from "./formatStringByWordsLength.js";

const resultat1 = formatStringByWordsLength(
  "This is a long, long, long sentence.",
);
console.log(resultat1);

const resultat2 = formatStringByWordsLength("This is short one.");
console.log(resultat2);

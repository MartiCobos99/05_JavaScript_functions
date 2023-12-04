import transformCollectionToString from "./transformCollectionToString.js";

const resultat1 = transformCollectionToString([
  "apple",
  "grapes",
  "strawberries",
]);

console.log(resultat1);

const resultat2 = transformCollectionToString([]);

console.log(resultat2);

import { checkCollectionHasElements } from "./checkCollectionHasElements.js";

const arrayExample = [1, 2, 3];
const resultArray = checkCollectionHasElements(arrayExample);
console.log(`Does the array have elements? ${resultArray}`);

const emptyArrayExample = [];
const resultEmptyArray = checkCollectionHasElements(emptyArrayExample);
console.log(`Does the empty array have elements? ${resultEmptyArray}`);

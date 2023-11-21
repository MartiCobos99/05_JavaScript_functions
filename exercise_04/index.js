import { isGreaterThan } from "./isGreaterThan.js";

const inputValue = 8;
const thresholdValue = 5;
const result = isGreaterThan(inputValue, thresholdValue);

console.log(`Is ${inputValue} greater than ${thresholdValue}? ${result}`);

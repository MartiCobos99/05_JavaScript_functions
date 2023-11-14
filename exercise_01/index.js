import getDistanceFromThreshold from "./getDistanceFromThreshold.js";

const inputValue = 8;
const thresholdValue = 5;

const distance = getDistanceFromThreshold(inputValue, thresholdValue);
console.log(`The distance from the threshold is: ${distance}`);

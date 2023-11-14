import { isTypeOf } from "./isTypeOf.js";

const stringValue = "Hello";
const stringType = "string";
const resultString = isTypeOf(stringValue, stringType);
console.log(`Is "${stringValue}" of type ${stringType}? ${resultString}`);

const arrayValue = [1, 2, 3];
const arrayType = "array";
const resultArray = isTypeOf(arrayValue, arrayType);
console.log(
  `Is ${JSON.stringify(arrayValue)} of type ${arrayType}? ${resultArray}`
);

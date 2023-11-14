/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

export function checkCollectionHasElements(collection) {
  return Array.isArray(collection) && collection.length > 0;
}

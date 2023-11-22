/**
 * #6 :: Export JS function "checkCollectionHasElements" to get length of a collection and check whether it is empty or not
 * input: array (collection)
 * output: boolean
 */

/**
 *
 * @param {array} collection
 * @returns boolean
 */
export default function checkCollectionHasElements(collection) {
  return (
    Array.isArray(collection) &&
    collection !== null &&
    collection !== undefined &&
    collection.length > 0
  );
}

/**
 * #1 :: Export JS function "getDistanceFromThreshold" to find how much a number exceeds or is left to reach one value
 * input: number (value)
 * input: number (threshold)
 * output: number
 */

/**
 * Calculates the distance from a threshold.
 * @param {number} value
 * @param {number} threshold
 * @returns number
 */
const getDistanceFromThreshold = function (value, threshold) {
  if (value > threshold) {
    return value - threshold;
  }
  if (threshold > value) {
    return threshold - value;
  }
  return 0;
};
export default getDistanceFromThreshold;

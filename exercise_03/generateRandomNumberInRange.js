/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */

/**
 * Generate a random number in range
 * @param {number} limit
 * @returns number
 */
const generateRandomNumberInRange = function (limit) {
  const randomNumber = Math.random() * limit;
  return Math.round(randomNumber);
};
export default generateRandomNumberInRange;

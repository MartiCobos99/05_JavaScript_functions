/**
 * #3 :: Export JS function "generateRandomNumberInRange" to generate a rounded random number depending on a limit
 * input: number (limit)
 * output: number
 */


export function generateRandomNumberInRange(limit) {
  const randomNumber = Math.random() * limit;
  return Math.round(randomNumber);
}

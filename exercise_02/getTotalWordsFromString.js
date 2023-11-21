/**
 * #2 :: Export JS function "getTotalWordsFromString" to get the total number of words contained in one string.
 * input: string (sentence)
 * output: number
 */

/**
 * Get total words from strings
 * @param {string} sentence
 * @returns number
 */
export default function getTotalWordsFromString(sentence) {
  const words = sentence.split(/\s+/);
  return words.filter((word) => word.length > 0).length;
}

export function chunkArray(array, chunkSize) {
  /*** Splits an array into chunks of a specified size.
   * @param {Array} array - The array to be split into chunks
   * @param {number} chunkSize - The size of each chunk
   * @return {Array} An array of chunks
   */
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}

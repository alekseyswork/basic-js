import { NotImplementedError } from "../extensions/index.js";

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    const element = Array.from(matrix[i]);
    num += element.filter(x => x=="^^").map(y => y == true).length;
  }
  return num;
}

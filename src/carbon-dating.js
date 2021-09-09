import { NotImplementedError } from "../extensions/index.js";

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

export default function dateSample(sampleActivity) {
  if (/^-?\d+$/.test(sampleActivity) == false || sampleActivity==null  || sampleActivity==undefined || sampleActivity==Object) {
    return false;
  }
  let k = 0.00012096; //Math.floor((0.693 / HALF_LIFE_PERIOD)*10000)/10000;//0.00012096
  let res = Math.floor(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  return res;
}


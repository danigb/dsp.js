/**
 * Returns the hyperbolic sine of the number, defined as (exp(number) - exp(-number))/2
 * version: 1004.2314
 * discuss at: http://phpjs.org/functions/sinh
 * original by: Onno Marsman
 *
 * @param {Number} num
 * @example
 * sinh(-0.9834330348825909); // => -1.1497971402636502
 */
function sinh (arg) {
  return (Math.exp(arg) - Math.exp(-arg))/2;
}

module.exports = sinh;

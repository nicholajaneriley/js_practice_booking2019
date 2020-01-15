/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */

 const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(nums => {
    if (nums %3 === 0 || nums %5 === 0){
     return true;
    } return false;
  }).reduce((total, amount) => total + amount, 0);
};

const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.match(/^[CGTA]/g)) {
    return true;
  } return false;
};

const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.match(/^[CGTA]/g)) {
    const complementary = str.split("");
    return complementary.map(letter => {
      switch(letter) {
        case "T":
          return "A";
        case "A":
          return "T";
        case "C":
          return "G";
        case "G":
          return "C";
      }
    }).join("");
  } return false;
};



/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};

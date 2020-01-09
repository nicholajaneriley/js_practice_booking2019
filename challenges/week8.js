const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // find n in nums
  //return first instance of n at i+1 assuming i+1 exists
  //else return null
  let index = nums.indexOf(n);
  if (index >= 0 && index < nums.length - 1){
  let nextItem = nums[index + 1];
  return nextItem;
  } return null;
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // count instance of 1 and return
  // count instances of 0 and return
  let arr = str.split("");
  return arr.filter(
    function (ones) {
      return ones === "1";
    }
  ).length;
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  let newNumber = n;
  var splitString = newNumber.toString().split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return parseInt(joinArray);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  return arrs.map(arr => {
    const sum = arr.reduce((total, amount) => total + amount);
    return sum.reduce((x, y) => x + y);
  });
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};

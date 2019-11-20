function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squared = nums.map(x => x ** 2);
  return(squared);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // first word is uncapitalised, subsequent words are capitalised and there are no spaces between
  let newArrCamel= words.map(item=> item.charAt(0).toUpperCase() + item.substr(1).toLowerCase())
  let allCaps = newArrCamel.join("");
  let camelCase = allCaps.charAt(0).toLowerCase() + allCaps.substring(1);
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

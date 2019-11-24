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
  let totalSubj = 0;
  people.forEach(person => {
    totalSubj += person.subjects.length;
  })
  return totalSubj;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  return menu.filter(plateOfFood => {
    if(plateOfFood.ingredients.includes(ingredient)){
      return true;
    }
    return false;
  }).length > 0;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  const uniqueNumbers = arr1.filter(arrayOneNumber => {
    if(arr2.includes(arrayOneNumber)){
      return true;
    }
    return false;
  }).sort(function(a, b){return a - b});
  return Array.from(new Set(uniqueNumbers));
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};

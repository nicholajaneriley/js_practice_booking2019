function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // returns an array of numbers smaller than 1
  return nums.filter(eachNum => {
    if(eachNum < 1){
      return eachNum;
    }
    return false;
  });
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // returns an array of names beginning with the specified character
  return names.filter(eachName => {
    if(eachName.charAt(0) === char){
      return eachName;
    }
    return false;
  });
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // returns an array of words that are considered verbs (because they begin with 'to '
  //does not mistake words that include 'to' elsewhere"
  return words.filter(verbs => {
    if(verbs.includes("to ")){
      return verbs;
    }
    return false;
  });
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // returns an array containing only integers
  return nums.filter(integers => {
    if(integers % 1 === 0){
      return integers;
    }
    return false;
  });
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};

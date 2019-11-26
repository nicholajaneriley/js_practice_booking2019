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

//come back to this one
function getCities(users) {
  if (!users) throw new Error("users is required");
  // returns an array of the cities of each user
  users.forEach(user =>{
    return user.data.city.displayName;
  });
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // gets the square root of each number to 2 decimal places
  return nums.map(squares =>{
    return Math.round((Math.sqrt(squares)) *100) /100;
  });
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // returns only the sentences containing the specified string
  //it should not be case sensitive
  return sentences.filter(specifiedString => {
    if(specifiedString.toLowerCase().includes(str.toLowerCase())){
      return specifiedString;
    }
    return false;
  });
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

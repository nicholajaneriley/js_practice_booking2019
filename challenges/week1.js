function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
    let capitalisedWord = word.charAt(0).toUpperCase() + word.slice(1);
    return(capitalisedWord);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // returns the initials of a firstname and surname
  return firstName.charAt(0) + "." + lastName.charAt(0);
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // adds a VAT of 20% to a price of 100
  let priceAndVat = originalPrice + ((originalPrice/100) * vatRate);
  return Math.round(priceAndVat * 100)/100;
}


function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // reduces a price of 100 by 50%"
  let salePrice = originalPrice - ((originalPrice/100) * reduction);
  return Math.round(salePrice * 100)/100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // returns the middle character from a string of odd length
  //returns the middle 2 characters from a string of even length
  if(str.length %2 === 0){
    let middlePos = (str.length/2)-1;
    return str.substring(middlePos, middlePos+2);
  } else {
  let middlePos = (str.length-1)/2;
  return str.charAt(middlePos);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // returns the provided word, reversed
  let newWord = word;
  var splitString = newWord.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // "returns a longer sentence, reversed"
  for (let i = 0; i < words.length; i++){
    let newWord = words.toString();
    var splitString = newWord.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    var array = joinArray.split(",");
    return array.reverse();   
  }
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let total = 0;
  for (let i = 0; i < users.length; i++){
   let userType = users[i];
   if(userType.type === "Linux"){
      total++;
   }  
  }
  return(total);
}


function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // "returns the mean score from an array of scores"
  // get values from array, add them together, divide by the length, return this
  const meanScores = scores.reduce((acc, c) => acc + c, 0);
  return Math.round((meanScores/ scores.length) *100)/ 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // If the number is divisable by 3 return fizz
    if (n %3 === 0 && n %5 === 0){
    return "fizzbuzz";
    } else if (n %5 === 0) {
      return "buzz";
    } else if (n %3 === 0){
      return "fizz";
    } else {
      return n;
  }
}




module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};

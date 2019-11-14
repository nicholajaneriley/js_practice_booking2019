function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // expect(getFillings(sandwich)).toEqual(["brie", "relish", "lettuce"]);
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // test("returns true if the person is from Manchester", () => {
    return person.city === "Manchester"
}


function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  //A bus can hold 40 people. This should return number of buses needed
  let busNumber = Math.ceil(people/40);
  return busNumber;
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Count the number of instances of sheep in an array
  // let count = 0;
  // for (let i = 0; i < arr.length; i++){
  //   if(arr[i] === "sheep"){
  //     count++;
  //   }
  // }
  // return count;
  return arr.filter(
    function (animal){
    return animal === "sheep";
  }
    ).length;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // If postcode starts with m and city is manchester then true else false
  return person.address.city === "Manchester" && person.address.postCode.charAt(0) === "M";

}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};

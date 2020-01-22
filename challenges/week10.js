
const sumDigits = n => {
  if (n === undefined) throw new Error("n is required");
  //split number into an array
  //add each number in the array
  //return number
  const sum = Array.from(n.toString()).map(Number);
  return sum.reduce((total, amount) => total + amount, 0);
};



const createRange = (start, end, step) => {
  if (start === undefined) throw new Error("start is required");
  if (end === undefined) throw new Error("end is required");
  const numArray = [];
  var gap = 0;

  if (step != null) {
    gap = step;
  } else {
    gap = 1;
  }

  for (let endNumber = start; endNumber < end; endNumber = endNumber + gap) {
    numArray.push(endNumber);
  }
  numArray.push(end);
  return numArray;
};


const getScreentimeAlertList = (users, date) => {
  if (users === undefined) throw new Error("users is required");
  if (date === undefined) throw new Error("date is required");
  // go through the users array and filter for the date
  // does the date entered match the array? If not, do nothing
  // for each user, add up the number of mins in each usage object
  // if the number of mins exceeds 100 then add username to an array & return
const userAlert = [];

  users.forEach(person => {

    let screenTimeDay = person.screenTime.filter(usageDay => date === usageDay.date);

    if (screenTimeDay.length > 0) {

    const screenMinutes = Object.values(screenTimeDay[0].usage).reduce((total, amount) => total + amount, 0);

    if (screenMinutes > 100) {
      userAlert.push(person.username);
    }
  }
  });
  return userAlert;
};


/**
 * This function will receive a hexadecimal color code in the format #FF1133. A hexadecimal code is a number written in hexadecimal notation, i.e. base 16. If you want to know more about hexadecimal notation:
 * https://www.youtube.com/watch?v=u_atXp-NF6w
 * For colour codes, the first 2 chars (FF in this case) represent the amount of red, the next 2 chars (11) represent the amound of green, and the last 2 chars (33) represent the amount of blue.
 * Colours can also be represented in RGB format, using decimal notation.
 * This function should transform the hex code into an RGB code in the format:
 * "rgb(255,17,51)"
 * Hint: You will need to convert each hexadecimal value for R, G and B into its decimal equivalent!
 * @param {String} str
 */
const hexToRGB = hexStr => {
  if (hexStr === undefined) throw new Error("hexStr is required");
};




/**
 * This function takes a noughts and crosses board represented as an array, where an empty space is represented with null.
 * [
 *  ["X", "0", null],
 *  ["X", null, "0"],
 *  ["X", null, "0"]
 * ]
 * The function should return "X" if player X has won, "0" if the player 0 has won, and null if there is currently no winner.
 * @param {Array} board
 */
const findWinner = board => {
  if (board === undefined) throw new Error("board is required");
};

module.exports = {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner
};

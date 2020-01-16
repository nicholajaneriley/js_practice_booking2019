
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  return arr.filter(nums => {
    if (nums % 3 === 0 || nums % 5 === 0) {
      return true;
    }
    return false;
  }).reduce((total, amount) => total + amount, 0);
};

const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.match(/^[CGTA]/g)) {
    return true;
  }
  return false;
};

const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (isValidDNA(str)) {
    const complementary = str.split("");
    return complementary.map(letter => {
      switch (letter) {
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
  }
  return false;
};

const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n < 2) return false;
  var q = Math.floor(Math.sqrt(n));
  for (var i = 2; i <= q; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");
  const arrayOne = Array(n).fill(fill);
  const matrix = Array(n).fill(arrayOne);
  return matrix;
};


const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let dayCount = 0;

  staff.forEach(person => {
    if (Object.values(person.rota).includes(day)) {
      dayCount++;
    }
  });

  if (dayCount >= 3) {
    return true;
  }
  return false;
};


module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};

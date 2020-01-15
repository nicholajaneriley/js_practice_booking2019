const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    //areWeCovered
} = require("../challenges/week9");


describe("sumMultiples", () => {
    test("returns the sum of any numbers in an array that are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1])).toBe(8);
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([3, 5, 122, 62, 21, 40, 1])).toBe(69);
    });
});

describe("isValidDNA", () => {
    test("returns true if the string only contains the characters C, G, T or A", () => {
        expect(isValidDNA("CGTAA")).toBe(true);
        expect(isValidDNA("BCGTA")).toBe(false);
    });
});

describe("getComplementaryDNA", () => {
    test("returns complementary DNA pairs if the string only contains the characters C, G, T or A where T pairs with A and C pairs with G", () => {
        expect(getComplementaryDNA("CGTA")).toBe("GCAT");
        expect(getComplementaryDNA("BCGTA")).toBe(false);
    });
});

describe("isItPrime", () => {
    test("returns true if number is prime (only divide by itself or 1)", () => {
        expect(isItPrime(7)).toBe(true);
        expect(isItPrime(8)).toBe(false);
        expect(isItPrime(587)).toBe(true);
    });
});

describe("createMatrix", () => {
    test("returns n arrays with n instances of fill", () => {
      expect(createMatrix(3, "foo")).toEqual([["foo", "foo", "foo"], ["foo", "foo", "foo"], ["foo", "foo", "foo"]]);
      expect(createMatrix(0, "")).toEqual([]);
    });
});
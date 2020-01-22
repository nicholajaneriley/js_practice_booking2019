const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    //findWinner
} = require("../challenges/week10");

describe("sumDigits", () => {
    test("returns the sum of the individual digits in a number", () => {
        expect(sumDigits(123)).toEqual(6);
        expect(sumDigits(123456)).toEqual(21);
    });
});


describe("createRange", () => {
    test("returns an array of numbers that are between a start and end number using a specified step or 1 if none specified", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(3, 11, 3)).toEqual([3, 6, 9, 11]);
        expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
        
    });
});


describe("getScreentimeAlertList", () => {

    test("returns an array of users who's screentime exceeds 100 minutes", () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 99 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-05-03", usage: { mapMyRun: 0, whatsApp: 0, facebook: 99, safari: 31 } },
                ]
            },
        ];

        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(users, "2019-05-03")).toEqual(["beth_1234", "sam_j_1989"]);
        expect(getScreentimeAlertList(users, "2020-05-03")).toEqual([]);
    });
});
const totalTill = require("./till");

test("calculates total for original till object", () => {
    const till = {"1p": 10, "5p": 6, "50p": 4, "20p": 10};
    expect(totalTill(till)).toEqual("£4.40");
});

test("calculates total for single coin type", () => {
    const till = {"1p": 100};
    expect(totalTill(till)).toEqual("£1.00");
});

test("calculates total for mixed coins", () => {
    const till = {"50p": 2, "10p": 5};
    expect(totalTill(till)).toEqual("£1.50");
});

test("handles empty till", () => {
    const till = {};
    expect(totalTill(till)).toEqual("£0.00");
});
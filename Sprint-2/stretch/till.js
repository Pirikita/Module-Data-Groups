// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += coin * quantity;
  }

  return `£${total / 100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

console.log(totalTill(5, 5));

module.exports = totalTill; 

// a) What is the target output when totalTill is called with the till object
    // it should return £4.40 - so it counts the total in pence and then converts to pounds

// b) Why do we need to use Object.entries inside the for...of loop in this function?
  // used to get key and values as an array so we can iterate over them in the for..of loop

// c) What does coin * quantity evaluate to inside the for...of loop?
    // is multiplying the coins by quantity so we can have the total amount 

// d) Write a test for this function to check it works and then fix the implementation of totalTill

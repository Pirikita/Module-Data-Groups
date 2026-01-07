// Predict and explain first...

 // I think it will show a syntax error due to inside const address we have more data than just the house number as requested.
 // My house number is undefined - not a syntax 

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 56,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};
// changed from {} to [] and from : to = 
// could just change the call in console.log with the original code

// with this code, to console.log, I have to call by the index 0,1,2,3,4,5
console.log(`My house number is ${address.houseNumber}`);
console.log(`My street name is ${address.street}`);
console.log(`My city is ${address.city}`);
console.log(`My country is ${address.country}`);
console.log(`My postcode is ${address.postcode}`);


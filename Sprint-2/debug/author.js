// Predict and explain first...

    // I believe is not working because is not an array, it will give me an syntax error 
        // real error: TypeError: author is not iterable

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of  Object.keys(author)) {
  const info = author[value];
  console.log(value, info);
}

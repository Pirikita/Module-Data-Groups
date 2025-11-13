function contains(obj, prop) { // define parameters
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return false;
    }
        return Object.prototype.hasOwnProperty.call(obj, prop);
}   


// Given a contains function
// When passed an object and a property name
// Then it should return true if the object contains the property, false otherwise
console.log(contains({a: 1, b: 2}, 'a')); // true

// Given an empty object
// When passed to contains
// Then it should return false
console.log(contains({}, 'a')); // false

// Given an object with properties
// When passed to contains with an existing property name
// Then it should return true
console.log(contains({a: 1, b: 2}, 'a')); // true

// Given an object with properties
// When passed to contains with a non-existent property name
// Then it should return false
console.log(contains({a: 1, b: 2}, 'c')); // false

// Given invalid parameters like an array
// When passed to contains
// Then it should return false or throw an error
console.log(contains([], 'a')); // false

module.exports = contains;

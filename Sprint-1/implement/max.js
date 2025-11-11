function findMax(elements) {
    if ( elements.length === 0){
        return -Infinity;
    } else if ( elements.length == 1) {
        return elements;
    }
}
console.log(findMax([]));
// Given an empty array
// When passed to the max function
// Then it should return -Infinity

// Given an array with one number
// When passed to the max function
// Then it should return that number

// Given an array with both positive and negative numbers
// When passed to the max function
// Then it should return the largest number overall

// Given an array with just negative numbers
// When passed to the max function
// Then it should return the closest one to zero

// Given an array with decimal numbers
// When passed to the max function
// Then it should return the largest decimal number

// Given an array with non-number values
// When passed to the max function
// Then it should return the max and ignore non-numeric values

// Given an array with only non-number values
// When passed to the max function
// Then it should return the least surprising value given how it behaves for all other inputs

module.exports = findMax;

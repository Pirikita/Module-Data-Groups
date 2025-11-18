function tally(arr) {
    if (!Array.isArray(arr)) {
        return "THIS IS NOT AN ARRAY!";
    }
    if (arr.length === 0) {
        return [];
    }
}
console.log(tally([]));

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item



// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item



module.exports = tally;

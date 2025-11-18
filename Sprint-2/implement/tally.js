function tally(arr) {
    if (!Array.isArray(arr)) {
        return "THIS IS NOT AN ARRAY!";
    }
    if (arr.length === 0) {
        return [];
    }

    const result = {};

    for (const item of arr) {
        if (result[item] === undefined) {
            result [item] = 1;
        } else {
            result[item] = result[item] + 1;
        }
    }
    return result;
}

console.log(tally("dasda"));
console.log(tally([]));
console.log(tally(["a", "b", "c", "b", "a", "a"]));

// Acceptance criteria:

// Given a function called tally
// When passed an array of items
// Then it should return an object containing the count for each unique item



// Given an array with duplicate items
// When passed to tally
// Then it should return counts for each unique item



module.exports = tally;

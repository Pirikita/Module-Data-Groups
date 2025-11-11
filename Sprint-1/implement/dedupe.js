function dedupe(arr) {
    if (!Array.isArray(arr) || arr.length === 0){
        return [];
    }
    const unique = [...new Set(arr)];
    return unique;
}

console.log(dedupe([])); // []
console.log(dedupe([1, 2, 3])); // [1, 2, 3]
console.log(dedupe([1, 2, 2, 3, 1])); // [1, 2, 3]
console.log(dedupe(["apple", "banana", "apple", "orange"])); // ["apple", "banana", "orange"]
console.log(dedupe(["apple", 3, 5, 5, 9, 7, "banana", "orange", "orange"]));

// Given an empty array
// When passed to the dedupe function
// Then it should return an empty array

// Given an array with no duplicates
// When passed to the dedupe function
// Then it should return a copy of the original array

// Given an array with strings or numbers
// When passed to the dedupe function
// Then it should remove the duplicate values, preserving the first occurence of each element

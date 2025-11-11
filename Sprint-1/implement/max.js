function findMax(elements) {
    const onlyNumbers = elements.filter(x => typeof x === "number" && !isNaN(x));
    // empty array
    if ( onlyNumbers.length === 0){
        return -Infinity;
    // array with only one number
    } if ( onlyNumbers.length === 1) {
        return onlyNumbers[0];
    } 
    return Math.max(...onlyNumbers);
}

console.log(findMax(["banana", 3, 20, -5, "apple", 3.5]));
console.log(findMax([10, -5, 20, -3]));        // 20 (mixed positive/negative)
console.log(findMax([-10, -5, -3, -8]));       // -3 (all negative)
console.log(findMax([1.5, 2.8, 1.2, 3.1]));    // 3.1 (decimals)
console.log(findMax([233]));                    // 233 (single number)
console.log(findMax([]));                       // -Infinity (empty array)
console.log(findMax(["banana"]));               // -Infinity (no valid numbers)


module.exports = findMax;

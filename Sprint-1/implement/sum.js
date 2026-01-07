function sum(elements) {
    // filter out only valid numbers from the input array
    const onlyNumbers = elements.filter(x => typeof x === "number" && !isNaN(x));
    return onlyNumbers.reduce((total, number)=> total + number, 0)
}

console.log(sum([-1, 5, 10, -1]));
console.log(sum(["banana", -1, 5, 10, -1, "pear"]));
console.log(sum([-1, -5, -10, -1]));
console.log(sum([1, 5, 10, 1]));
console.log(sum([]));
console.log(sum([10]));
console.log(sum(["banana"]));
console.log(sum([-1, 5.9, 10.4, -1.2]));

module.exports = sum;

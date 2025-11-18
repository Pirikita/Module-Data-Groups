function tally(arr) {
    if (!Array.isArray(arr)) {
        return "THIS IS NOT AN ARRAY!";
    }
    if (arr.length === 0) {
        return {};
    }
 /* ANOTHER WAY OF DOING THE DUPLICATE ITEMS
result[item] = (result[item] || 0) + 1;
 */
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

//console.log(tally("dasda"));
//console.log(tally([]));
//console.log(tally(["a", "b", "c", "b", "a", "a"]));


module.exports = tally;

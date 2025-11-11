// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  // check if its array and if has content
  if (!Array.isArray(list) || list.length === 0) return null;

  // filter for valid numbers
  const numbers = list.filter(
    (item) => typeof item === "number" && !isNaN(item)
  );

  // if there's no numbers returns null
  if (numbers.length === 0) return null;

  // sort without modifying the original
  const sorted = [...numbers].sort((a, b) => a - b);

  // calculates median
  const middle = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  } else {
    return sorted[middle];
  }
}

module.exports = calculateMedian;

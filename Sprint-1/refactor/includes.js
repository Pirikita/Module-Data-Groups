// Refactor the implementation of includes to use a for...of loop

function includes(list, target) {
  for (const element of list) {
    if (element === target) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 10, 15, 20], 6));
module.exports = includes;

/*function includes(list, target) {
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (element === target) {
      return true;
    }
  }
  return false;
}*/
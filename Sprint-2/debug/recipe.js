// Predict and explain first...

    // Is missing the instruction to log the ingredients in different lines, so it will not show the ingredients 
    // and also not in a different line

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} 
  ingredients: 
  ${recipe.ingredients.join('\n')}`); // .join('\n') to make a new line for each value on the string

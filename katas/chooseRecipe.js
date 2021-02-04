const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  ABakery = ingredientCheck(bakeryA, recipes);
  BBakery = ingredientCheck(bakeryB, recipes);

  for (i = 0; i < ABakery.length; i++) {
    for (j = 0; j < BBakery.length; j++) {
      if (ABakery[i] === BBakery[j]) {
        return ABakery[i];
      } else {
        continue;
      }
    }
  }
  return false;
};


const ingredientCheck = function(bakery, recipes) {
  let recipeMatch = [];
  recipes.forEach(recipe => {
    for (let i = 0; i < bakery.length; i++) {
      for (let j = 0; j < recipe['ingredients'].length; j++) {
        if (bakery[i] === recipe.ingredients[j]) {
          recipeMatch.push(recipe.name);
        } else {
          continue;
        }
      }
    }
  });
  return recipeMatch;
};


let bakeryA = ['eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base']
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese']
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate']
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey']
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins']
  }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
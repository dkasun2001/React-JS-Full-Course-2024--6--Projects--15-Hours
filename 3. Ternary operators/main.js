let showRecipeOne = false;

function getRecipeOneName(recipeName) {
  return recipeName;
}

function getRecipeTwoName(recipeName) {
  return recipeName;
}

if (showRecipeOne) {
  console.log(getRecipeOneName("Pizza"));
} else {
  console.log(getRecipeTwoName("Coke"));
}

//------------ Ternary operators

showRecipeOne ? console.log(getRecipeOneName("Pazza")) : console.log(getRecipeTwoName("Coke"));

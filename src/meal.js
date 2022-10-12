function nameMenuItem(food) {
  return `Delicious ${food}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price, 
    type: type,
  }
  return menuItem
}

function addIngredients(toppings, ingredientsToAdd) {
  if (!ingredientsToAdd.includes(toppings))
    ingredientsToAdd.push(toppings)
}

function formatPrice(price) {
 return `$${price}`
}

function decreasePrice(price) {
var salePrice = price * .10
var finalPrice = price - salePrice
return finalPrice
}

function createRecipe (title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}



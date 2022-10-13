class Chef {
  constructor(name, restaurant) {
    console.log()
    this.name = name
    this.restaurant = restaurant
  }

  greetCustomer(custName, isMorning) {
     if (isMorning === true) {
      return `Good morning, ${custName}!`
    } else {
    return `Hello, ${custName}!`
  }
}

checkForFood(foodItem) {

// console.log(foodItem)
// console.log(this.restaurant.menus.breakfast)
  for (var i = 0; i < this.restaurant.menus.breakfast.length;i++) {
  if (this.restaurant.menus.breakfast[i, i].name || this.restaurant.menus.breakfast[0, 1].name === foodItem.name) {
    return `Yes, we're serving ${foodItem.name} today!`
  } 
      
}


return `Sorry, we aren't serving ${foodItem.name} today.`
}
}


module.exports = Chef;
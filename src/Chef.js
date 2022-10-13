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

var menuItems = [];

  for (var i = 0; i < this.restaurant.menus.breakfast.length;i++) {
  menuItems.push(this.restaurant.menus.breakfast[i].name)
}
  menuItems = menuItems.join(`, `)
if (menuItems.includes(foodItem.name)) {
  return `Yes, we're serving ${foodItem.name} today!`
} else {
  return `Sorry, we aren't serving ${foodItem.name} today.`
    }
  }
}


module.exports = Chef;
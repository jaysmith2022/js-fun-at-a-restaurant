function createRestaurant(name) {
  var menus = {
    breakfast: [],
    lunch: [],
    dinner: [],
    }
  var restName = {
    name: name,
    menus: menus,
  }
  return restName
}

function addMenuItem(menu, order) {
if (order.type === `lunch` && !menu.menus.lunch.includes(order)) {
  menu.menus.lunch.push(order)
} else {
  if (order.type === `breakfast` && !menu.menus.breakfast.includes(order)) {
    menu.menus.breakfast.push(order)
} else {
    if (order.type === `dinner` && !menu.menus.dinner.includes(order)) {
    menu.menus.dinner.push(order)
      }
    }
  }
}

function removeMenuItem(menu, order, time) {
  if (menu.menus[time] !== `undefined`) {
    for (var i = 0; i < menu.menus[time].length;i++) {
  if (menu.menus.breakfast[0].name === order) {
      menu.menus.breakfast.splice(order)
    return `No one is eating our ${order} - it has been removed from the ${time} menu!`
  } else {
  if (menu.menus.dinner[0].name === order) {
      menu.menus.dinner.splice(order)
    return `No one is eating our ${order} - it has been removed from the ${time} menu!`
    }
  }
}
return `Sorry, we don't sell ${order}, try adding a new recipe!`
  }
}

  


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}
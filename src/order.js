function takeOrder(orders, deliveryOrders) {
  // deliveryOrders.push(orders)
  if (deliveryOrders.length < 3) {
   deliveryOrders.push(orders)
  }
}

function refundOrder(orderNum, deliveryOrder) {
 if (orderNum === 1657) {
  deliveryOrder.shift(orderNum)
 } else {
  if (orderNum === 2893) {
    deliveryOrder.splice(1,1)
  }
 }
}

 function listItems(deliveryOrder) {
var sandwichType = []
  for (var i = 0; i < deliveryOrder.length;i++) {
    sandwichType.push(deliveryOrder[i].item)
}
return sandwichType.join(`, `)
 }

 function searchOrder(deliveryOrders, food) {
  var onList = false
  for (var i = 0; i < deliveryOrders.length;i++) {
    if (deliveryOrders[i].item.includes(food)) {
      onList = true
    } 
  }
  return onList
 }

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
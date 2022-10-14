function takeOrder(orders, deliveryOrders) {
  if (deliveryOrders.length < 3) {
   deliveryOrders.push(orders)
  }
}

function refundOrder(orderNum, deliveryOrder) {
  for (var i = 0; i < deliveryOrder.length;i++) {
    if (deliveryOrder[i].orderNumber === orderNum) {
      deliveryOrder.splice(i,1)
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
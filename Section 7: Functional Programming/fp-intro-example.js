const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const soap = {
  name: 'soap',
  price: 1
}

const diabloIV = {
  name: 'Diablo IV',
  price: 80
}

const bikeTires = {
  name: 'Winter Spike Tires',
  price: 50
}
// Implement a cart feature that allows user to purchase an item
// User is able to purchase an item
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: move cart to purchases
// 4. empty cars
const taxPercent = 0.03
const addTax = (item, taxPercent) => item.price + (item.price * taxPercent)
const addItemToCart = (user, item) => {
  const priceWithTax = addTax(item, taxPercent)
  user.cart = [...user.cart, {...item, price: priceWithTax}]
}

const addCartToPurchases = user => {
  user.purchases = [...user.cart]
}
const clearCart = user => {
  user.cart = []
}

const makeAPurchase = (user) => {
  addCartToPurchases(user)
  console.log("move cart to purchase", user)
  clearCart(user)
  console.log("clear cart", user)
}

addItemToCart(user, soap)
addItemToCart(user, soap)
addItemToCart(user, soap)
addItemToCart(user, diabloIV)
addItemToCart(user, diabloIV)
addItemToCart(user, bikeTires)
console.log('users cart', user.cart)
makeAPurchase(user)

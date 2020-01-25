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
  console.log('move cart to purchase', user)
  clearCart(user)
  console.log('clear cart', user)
}

addItemToCart(user, soap)
addItemToCart(user, soap)
addItemToCart(user, soap)
addItemToCart(user, diabloIV)
addItemToCart(user, diabloIV)
addItemToCart(user, bikeTires)
console.log('users cart', user.cart)
makeAPurchase(user)

// Instructors Solution after going through FP section
const user2 = {
  name: 'Jim',
  active: true,
  cart: [],
  purchases: []
}
let amazonHistory = []
const compose = (f, g) => (...args) => f(g(...args))
const itemPurchased = purchaseItem(
  emptyCart,
  buyItem,
  applyTaxToItems,
  addItemToCartSolution)(user2, {name: 'laptop', price: 199})

function purchaseItem (...fns) { // purchase items recieves a lot of functions as arguments, so spread the functions out with the spread operator
  return fns.reduce(compose) // previousValue and the current value of the reduce set into the compose function and are run, thereby runing each functino one by one and returning the value at the en
}

function addItemToCartSolution (user, item) {
  amazonHistory.push(user)
  const updatedCard = user.cart.concat([item])
  return Object.assign({}, user, {cart: updatedCard})
}

function applyTaxToItems (user) {
  amazonHistory.push(user)

  const {cart} = user
  const taxRate = 1.03
  const updatedCart = cart.map(item => {
    return {
      ...item,
      price: item.price * taxRate
    }
  })
  return Object.assign({}, user, {cart: updatedCart})
}
function buyItem (user) {
  amazonHistory.push(user)
  return Object.assign({}, user, {purchases: user.cart})
}
function emptyCart (user) {
  amazonHistory.push(user)
  // return {...user, cart: []} // could use the spread operator instead (this would be my preferred method)
  return Object.assign({}, user, {cart: []})
}

console.log(itemPurchased)
console.log(amazonHistory)

// this was cool, we can now have a history of the user for each method we provided
// in the array the objects are unique because we are always returning a new object from our functions
// so there is no mutation of state

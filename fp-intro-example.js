const user = {
  name: 'Kim',
  active: true,
  cart: [],
  purchases: []
}
const item = {
  name: 'soap',
  price: 1
}

// Implement a cart feature that allows user to purchase an item
// User is able to purchase an item
// 1. Add items to cart
// 2. Add 3% tax to item in cart
// 3. Buy item: move cart to purchases
// 4. empty cars

const addItemToCart = (item, user) => {
  user.cart = [...user.cart, item]
}


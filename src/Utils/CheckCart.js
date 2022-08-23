export default function checkCart(cart, product) {
  return cart.find((c) => c.id === product.id);
}

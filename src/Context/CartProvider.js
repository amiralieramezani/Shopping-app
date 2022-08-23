import { createContext, useContext, useEffect, useReducer } from "react";

import cartReducer from "./CartReducer";

const CartContext = createContext();

const CartContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "cartState";

let initialCart = [];
let initialTotal = 0;
let initialFakeTotal = 0;
let initialDiscount = 0;

if (LOCAL_STORAGE_AUTH_KEY in localStorage) {
  const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
  initialCart = userData.cart;
  initialTotal = userData.total;
  initialFakeTotal = userData.fake_total;
  initialDiscount = userData.discount;
} else {
  localStorage.setItem(
    LOCAL_STORAGE_AUTH_KEY,
    JSON.stringify({
      cart: [],
      total: 0,
      fake_total: 0,
      discount: 0,
    })
  );
}

const initialState = {
  cart: initialCart,
  total: initialTotal,
  fake_total: initialFakeTotal,
  discount: initialDiscount,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_KEY));
    dispatch({ type: "restore", payload: userData });
  }, []);

  useEffect(() => {
    const data = JSON.stringify(cart);
    localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, data);
  }, [cart]);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext(CartContext);

export const useCartActions = () => useContext(CartContextDispatcher);

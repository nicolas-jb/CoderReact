import React, { useState, createContext } from "react";

export const cartContext = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);

  function getCart() {
    return cart;
  }

  function getProductsQuantity() {
    if (isEmpty()) return 0;
    return cart
      .map((product) => product.quantity)
      .reduce((q1, q2) => q1 + q2, 0);
  }

  function addItem(item, quantity) {
    let updateCart;
    if (isInCart(item.id)) {
      updateCart = cart.map((p) => {
        if (p.id === item.id) {
          return { ...p, quantity: p.quantity + quantity };
        }
        return p;
      });
    } else {
      item.quantity = quantity;
      updateCart = [...cart, item];
    }

    setCart(updateCart);
  }

  function removeItem(item, quantity) {
    if (isInCart(item.id)) {
      const updateCart = cart.map((p) => {
        if (p.id === item.id) {
          return { ...p, quantity: p.quantity - quantity };
        }
        return p;
      });
      setCart(updateCart.filter((p) =>p.quantity > 0));
    }
  }

  function clear() {
    setCart([]);
  }

  function isInCart(id) {
    return cart.map((p) => p.id).indexOf(id) < 0 ? false : true;
  }

  function isEmpty() {
    return getCart().length === 0;
  }

  function getTotalPrice() {
    return cart
      .map((product) => product.quantity * product.price)
      .reduce((q1, q2) => q1 + q2, 0);
  }

  return (
    <>
      <cartContext.Provider
        value={{ addItem, getCart, getProductsQuantity, removeItem, clear, getTotalPrice }}
      >
        {children}
      </cartContext.Provider>
    </>
  );
}

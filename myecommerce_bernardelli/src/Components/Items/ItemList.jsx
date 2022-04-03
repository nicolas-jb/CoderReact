import React from "react";
import Item from "./Item";

export default function ItemList({ products, onAdd }) {
  return (
    <>
      {products.map((product) => (
        <Item key={product.id} product={product} onAdd={onAdd} />
      ))}
      
    </>
  );
}

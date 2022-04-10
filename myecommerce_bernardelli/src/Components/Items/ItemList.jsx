import React from "react";
import Item from "./Item";
import { Link } from "react-router-dom";

export default function ItemList({ products }) {
  return (
    <div style={{ display: "flex", justifyContent: "Space-around"}}>
      {products.map((product) => (
        <Link  key={product.id} to={`/item/${product.id}`} style={{ textDecoration: "none" }}>
          {" "}
          <Item product={product}/>
        </Link>
      ))}
    </div>
  );
}

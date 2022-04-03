import React, { useState, useEffect } from "react";
import { ProductPromise } from "../../utils/ProductPromise.js";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting, onAdd }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductPromise.then((promiseResult) => setProducts(promiseResult)).catch(
      (err) => console.log(err)
    );
  }, []);

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "Space-around" }}>
        {greeting}
      </h2>
      <div style={{ display: "flex", justifyContent: "Space-around" }}>
        <ItemList products={products} onAdd={onAdd} />
      </div>
    </>
  );
}

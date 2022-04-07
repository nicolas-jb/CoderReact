import React, { useState, useEffect } from "react";
import { getProducts } from "../../utils/ApiResponse.js";
import ItemList from "./ItemList";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      setProducts(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "Space-around" }}>
        {greeting}
      </h2>
      <div>
        <ItemList products={products} />
      </div>
    </>
  );
}

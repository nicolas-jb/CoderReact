import React, { useState, useEffect } from "react";
import { getProducts } from "../../utils/ApiResponse.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams()

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts(categoryId);
      setProducts(response);
    }
    fetchData();
  }, [categoryId]);

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

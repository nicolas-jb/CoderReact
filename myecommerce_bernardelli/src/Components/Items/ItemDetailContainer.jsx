import React, { useState, useEffect } from "react";
import { getAProduct } from "../../utils/ApiResponse.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer({ onAdd }) {
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getAProduct();
      setProduct(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "Space-around"}}>
        <ItemDetail product={product} onAdd={onAdd} />
      </div>
    </>
  );
}

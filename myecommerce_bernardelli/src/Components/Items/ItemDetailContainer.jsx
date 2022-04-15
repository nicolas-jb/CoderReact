import React, { useState, useEffect } from "react";
import { getAProduct } from "../../utils/ApiResponse.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await getAProduct(itemId);
      setProduct(response);
    }
    fetchData();
  }, [itemId]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "Space-around" }}>
        <ItemDetail product={product} />
      </div>
    </>
  );
}

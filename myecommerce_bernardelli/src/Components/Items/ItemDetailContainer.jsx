import React, { useState, useEffect } from "react";
import { getAProduct } from "../../utils/ApiResponse.js";
import ItemDetail from "./ItemDetail.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader.jsx";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await getAProduct(itemId);
      setProduct(response);
      setLoading(false);
    }
    fetchData();
  }, [itemId]);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "Space-around" }}>
        {loading ? <Loader /> : <ItemDetail product={product} />}
      </div>
    </>
  );
}

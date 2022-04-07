import React, { useState, useEffect } from "react";
import { getAProduct, getProducts } from "../../utils/ApiResponse.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer({ onAdd }) {
  const [product, setProduct] = useState({});

  /*useEffect(() => {
    async function fetchData() {
      const response = await getAProduct();
      setProduct(response);
    }
    fetchData();
  }, []);*/

  useEffect(() => {
    async function fetchData() {
      const response = await getProducts();
      setProduct({...response[0], description: "Esta es una descripción"}); //filtro y tomo el primer elemento del array
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

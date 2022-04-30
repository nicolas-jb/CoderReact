import React, { useState, useEffect } from "react";
import { getProducts } from "../../utils/ApiResponse.js";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader"

export default function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const {categoryId} = useParams()

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const response = await getProducts(categoryId);
      setProducts(response);
      setLoading(false)
    }
    fetchData();
    return () => {
      setProducts(null)
      setLoading(false)
    }
  }, [categoryId]);

  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "Space-around", marginTop: "20px" }}>
        {greeting}
      </h2>
      <div>
        {loading ? <Loader /> : <ItemList products={products} />}
      </div>
    </>
  );
}

import React from "react";
import ItemCount from "./ItemCount";
import ItemStyle from "./ItemDetail.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ItemDetail({ product, onAdd }) {
  const [showItemCount, setShowItemCount] = useState(true);

  function handleItemCount(flag) {
    setShowItemCount(flag);
  }

  return (
    <div>
      <div className={ItemStyle.productContainer}>
        {(product.stock || product.initial) && (
          <div key={product.id}>
            <div className={ItemStyle.productDetail}>
              <div className={ItemStyle.productDetailImage}>
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className={ItemStyle.productDetailImageSize}
                />
              </div>
              <div className={ItemStyle.productDetailText}>
                <div>
                  <p>
                    {product.condition}
                    {" - "}
                    {product.soldQuantity}{" "}
                    {product.soldQuantity > 1 ? "vendidos" : "vendido"}
                  </p>
                </div>
                <h2>{product.title}</h2>
                <h1>
                  {product.price.toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                </h1>
                {!showItemCount && (
                  <div className={ItemStyle.productPurchase}>
                    <Link to={"/cart"} className={ItemStyle.buttonPurchase}>Comprar ahora</Link>
                  </div>
                )}
              </div>
            </div>
            <div className={ItemStyle.productTextDescription}>
              <h2>Descripción del Producto</h2>
              <p>{product.description}</p>
            </div>
            <div>
              {showItemCount && (
                <ItemCount
                  stock={product.stock}
                  initial={product.initial}
                  onAdd={onAdd}
                  handleItemCount={handleItemCount}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

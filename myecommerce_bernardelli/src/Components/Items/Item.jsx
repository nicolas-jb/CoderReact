import * as React from "react";
import ItemStyle from "./Item.module.css";

export default function Item({ product }) {
  return (
    <div className={ItemStyle.products}>
      <div>
        <img
          src={product.imageUrl}
          alt={product.title}
          className={ItemStyle.productImage}
        />
      </div>
      <div className={ItemStyle.productDescription}>
        <div>
          <h3>{product.title}</h3>
        </div>
        <div>
          <h4>
            {product.price.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
            })}
          </h4>
        </div>
      </div>
      <div className={ItemStyle.productStock}>
        Stock actual= {product.stock}{" "}
      </div>
    </div>
  );
}

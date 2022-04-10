import React from "react";
import ItemCount from "./ItemCount";
import ItemStyle from "./ItemDetail.module.css";

export default function ItemDetail({ product, onAdd }) {
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
                <button
                  className={ItemStyle.productPurchase}
                  onClick={() => {
                    alert(
                      "Felicitaciones por haber comprado " +
                        product.title +
                        ". Lo redirigiremos a su carrito para que pueda finalizar la compra."
                    );
                  }}
                >
                  Comprar ahora
                </button>
              </div>
            </div>
            <div className={ItemStyle.productTextDescription}>
              <h2>Descripción del Producto</h2>
              <p>{product.description}</p>
            </div>
            <div>
              <ItemCount
                stock={product.stock}
                initial={product.initial}
                onAdd={onAdd}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

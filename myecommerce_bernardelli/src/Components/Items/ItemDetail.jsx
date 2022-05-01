import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import ItemStyle from "./ItemDetail.module.css";
import { Link } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";
import ModalComponent from "../ModalComponent";
import { checkStock } from "../../utils/ApiResponse.js";

export default function ItemDetail({ product }) {
  const [showItemCount, setShowItemCount] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { addItem } = useContext(cartContext);

  async function onAdd(quantity) {
    const actualStock = (await checkStock(product.id)) - quantity;
    if (actualStock-quantity < 0) {
      setShowModal(true);
    } else {
      setShowItemCount(false);
      addItem(product, quantity);
    }
  }

  const handleModalView = (show) => {
    setShowModal(show);
  };

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
                    <Link to={"/cart"} className={ItemStyle.buttonPurchase}>
                      Ir al carrito
                    </Link>
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
                />
              )}
            </div>
          </div>
        )}
      </div>
      {showModal && (
        <ModalComponent
          content={
            "Se produjo un error de stock. Lamentamos lo sucedido. Por favor, ingrese nuevamente al producto o si prefiere un representante se comunicará para explicar la situación"
          }
          onChange={handleModalView}
        />
      )}
    </div>
  );
}

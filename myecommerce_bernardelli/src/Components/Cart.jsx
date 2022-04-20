import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import ItemInCart from "../Components/Items/ItemInCart";
import ItemStyle from "./Cart.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import NoItemsInCart from "./NoItemsInCart/NoItemsInCart";

export default function CartWidget() {
  const { getCart, clear, getProductsQuantity, getTotalPrice } =
    useContext(cartContext);

  return (
    <>
      <div className={ItemStyle.pageContainer}>
        <div className={ItemStyle.productContainer}>
          {getCart().map((product) => (
            <ItemInCart key={product.id} product={product} />
          ))}
        </div>
        <Typography variant="h4" color="text.primary">
          {getTotalPrice() > 0
            ? getTotalPrice().toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })
            : null}
        </Typography>
        {getProductsQuantity() > 0 && (
          <Button
            className={ItemStyle.buttonClear}
            variant="outlined"
            color="warning"
            startIcon={<DeleteIcon />}
            onClick={clear}
          >
            Vaciar Carrito
          </Button>
        )}
      </div>
      {getProductsQuantity() === 0 && <NoItemsInCart />}
    </>
  );
}

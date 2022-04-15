import React, { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import ItemInCart from "../Components/Items/ItemInCart";
import ItemStyle from "./Cart.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartWidget() {
  const { getCart, clear } = useContext(cartContext);

  return (
    <div className={ItemStyle.pageContainer}>
      <div className={ItemStyle.productContainer}>
        {getCart().map((product) => (
          <ItemInCart key={product.id} product={product} />
        ))}
      </div>
      <Button
        className={ItemStyle.buttonClear}
        variant="outlined"
        color="warning"
        startIcon={<DeleteIcon />}
        onClick={clear}
      >
        Vaciar Carrito
      </Button>
    </div>
  );
}

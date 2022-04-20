import React from "react";
import ItemStyle from "./NoItemsInCart.module.css";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import image from "../../Assets/cart.png";

export default function NoItemsInCart() {
  return (
    <>
      <div className={ItemStyle.noItemContainer}>
        <img src={image} alt="cart" className={ItemStyle.noItemImage} />
        <Typography variant="h3" color="text.primary">
          Tu carrito se encuentra vacío!
        </Typography>
        <Typography variant="h7" color="text.primary">
          Antes de poder finalizar la compra, debe agregar productos al carrito.
          Va a poder encontrar lo que busca en la página de la tienda!
        </Typography>

        <div className={ItemStyle.buttonHome}>
          <Link to={"/"} style={{textDecoration: "none", color: "black"}}>Volver al Inicio</Link>
        </div>
      </div>
    </>
  );
}

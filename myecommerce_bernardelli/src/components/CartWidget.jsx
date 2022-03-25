import React from "react";
import cartIcon from "../Icons/Cart.ico";
import "../Styles/Cart.css";

export default function CartWidget({ quantity }) {
  return (
    <div className="Cart">
      <div>
        <img alt="" src={cartIcon} width="50" height="50" />
      </div>
      <div className="Quantity">
        <p>{quantity}</p>
      </div>
    </div>
  );
}

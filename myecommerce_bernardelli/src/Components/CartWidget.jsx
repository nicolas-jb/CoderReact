import React from "react";
import { Link } from "react-router-dom";

export default function CartWidget({ quantity }) {
  return (
    <>
      <Link to={"cart"} style={{ textDecoration: "none", color: "black" }} > 🛒 ({quantity}) </Link>{" "}
    </>
  );
}

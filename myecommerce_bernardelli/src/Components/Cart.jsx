import React, { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import ItemInCart from "../Components/Items/ItemInCart";
import ItemStyle from "./Cart.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import NoItemsInCart from "./NoItemsInCart/NoItemsInCart";
import CheckIcon from "@mui/icons-material/Check";
import Form from "./Form";
import ModalComponent from "./ModalComponent";
import { useNavigate } from "react-router-dom";

export default function CartWidget() {
  const { getCart, clear, getProductsQuantity, getTotalPrice } =
    useContext(cartContext);
  const [showModal, setShowModal] = useState(false);

  const handleModalView = (show) => {
    setShowModal(show);
  };

  let navigate = useNavigate();

  const handleFormClose = () => {
    clear();
    navigate("/");
  };

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
          <>
            <Button
              className={ItemStyle.buttonClear}
              variant="outlined"
              color="warning"
              startIcon={<DeleteIcon />}
              onClick={clear}
            >
              Vaciar Carrito
            </Button>
            <Button
              className={ItemStyle.buttonPurchase}
              variant="contained"
              color="warning"
              startIcon={<CheckIcon />}
              onClick={() => {
                handleModalView(true);
              }}
            >
              Comprar
            </Button>
            {showModal && (
              <ModalComponent
                content={<Form onClose={handleFormClose} />}
                onChange={handleModalView}
              />
            )}
          </>
        )}
      </div>
      {getProductsQuantity() === 0 && <NoItemsInCart />}
    </>
  );
}

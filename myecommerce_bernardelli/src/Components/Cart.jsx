import React, { useContext, useState } from "react";
import { cartContext } from "../Context/CartContext";
import ItemInCart from "../Components/Items/ItemInCart";
import ItemStyle from "./Cart.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import NoItemsInCart from "./NoItemsInCart/NoItemsInCart";
import CheckIcon from "@mui/icons-material/Check";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Form from "./Form"

export default function CartWidget() {
  const { getCart, clear, getProductsQuantity, getTotalPrice } =
    useContext(cartContext);

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const handleOpen = () => setShowRegisterModal(true);
  const handleClose = () => setShowRegisterModal(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #FFC008',
    boxShadow: 24,
    p: 4,
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
              onClick={handleOpen}
            >
              Comprar
            </Button>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showRegisterModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showRegisterModal}>
          <Box sx={style}>
            <Form />
          </Box>
        </Fade>
      </Modal>
          </>
        )}
      </div>
      {getProductsQuantity() === 0 && <NoItemsInCart />}
    </>
  );
}

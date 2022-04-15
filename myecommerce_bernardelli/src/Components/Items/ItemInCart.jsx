import React, { useContext } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { cartContext } from "../../Context/CartContext";
import Icon from "@mui/material/Icon";

export default function ItemInCart({ product }) {
  const { removeItem } = useContext(cartContext);

  return (
    <>
      <Card sx={{ maxWidth: 1000 }} style={{ marginTop: "20px" }}>
        <CardContent style={{ display: "flex" }}>
          <CardContent style={{
                width: "40%",
                display: "flex",
                justifyContent: "center",
              }}>
            <img src={product.imageUrl} alt={product.title} height="200" />
          </CardContent>
          <CardContent style={{
                width: "60%"
              }}>
            <Typography gutterBottom variant="h5">
              {product.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Cantidad: {product.quantity}
              {product.quantity > 1 && (
                <Button
                  onClick={() => {
                    removeItem(product, 1);
                  }}
                >
                  <Icon color="warning">remove_circle</Icon>
                </Button>
              )}
            </Typography>
            <Typography variant="h4" color="text.primary">
              {(product.quantity * product.price).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
              })}
            </Typography>
          </CardContent>
        </CardContent>
        <Button
          size="small"
          color="warning"
          fullWidth={true}
          onClick={() => {
            removeItem(product, product.quantity);
          }}
        >
          Quitar del carrito
        </Button>
      </Card>
    </>
  );
}

import React from "react";
import ItemCount from "./ItemCount";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ItemDetail({ product, onAdd }) {
  return (
    <>
      {(product.stock || product.initial) && (
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="50%"
              width="50%"
              image={product.imageUrl}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              Stock actual={product.stock}
              <Typography gutterBottom variant="h4" component="div">
                {product.price.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </Typography>
            </CardContent>
          </Card>
          <div>
            <ItemCount
              stock={product.stock}
              initial={product.initial}
              onAdd={onAdd}
            />
          </div>
        </div>
      )}
    </>
  );
}

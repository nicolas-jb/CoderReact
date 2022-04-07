import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Item({ product }) {
  return (
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
        <Typography gutterBottom variant="h4" component="div">
                {product.price.toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </Typography>
        Stock actual={product.stock}
      </CardContent>
    </Card>
  );
}

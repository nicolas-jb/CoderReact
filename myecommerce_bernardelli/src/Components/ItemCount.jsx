import * as React from "react";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function ItemCount({ productName, stock, initial, onAdd }) {
  let [count, setCount] = React.useState(initial);
  let [actualStock, setActualStock] = React.useState(stock);

  React.useEffect(() => {
    setCount(Math.min(actualStock, initial));
  }, [actualStock, initial]);

  return (
    <Box
      sx={{
        color: "action.active",
        display: "flex",
        flexDirection: "column",
        "& > *": {
          marginBottom: 2,
        },
        "& .MuiBadge-root": {
          marginRight: 4,
        },
      }}
    >
      <label>{productName}</label>
      <div>
        <Badge color="warning" badgeContent={count}>
          <ShoppingCartRoundedIcon />
        </Badge>
        <ButtonGroup>
          <Button
            color="warning"
            aria-label="reduce"
            onClick={() => {
              setCount(Math.max(count - 1, Math.min(actualStock, initial)));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            color="warning"
            aria-label="increase"
            onClick={() => {
              setCount(Math.min(count + 1, actualStock));
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </div>
      <ButtonGroup sx={{ width: "100%" }}>
        <Button
          color="warning"
          aria-label="reduce"
          fullWidth= {true}
          onClick={() => {
            setActualStock(actualStock - count);
            count > 0
              ? onAdd(count)
              : alert("Por el momento no tenemos stock de este producto");
          }}
        >
          Agregar
        </Button>
      </ButtonGroup>
    </Box>
  );
}

import React from "react";
import ItemCount from "../Components/ItemCount";

export default function ItemListContainer({ greeting, onAdd }) {
  return (
    <>
      <h2 style={{ display: "flex", justifyContent: "Space-around" }}>
        {greeting}
      </h2>
      <div style={{ display: "flex", justifyContent: "Space-around" }}>
        <ItemCount
          productName={"Camisa Tiger"}
          initial={4}
          stock={10}
          onAdd={onAdd}
        />
        <ItemCount
          productName={"Pantalón Tiger"}
          initial={2}
          stock={10}
          onAdd={onAdd}
        />
        <ItemCount
          productName={"Zapatos Tiger"}
          initial={0}
          stock={0}
          onAdd={onAdd}
        />
      </div>
    </>
  );
}

import React, { useState } from "react";
import ItemListContainer from "./Components/Items/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  let [quantityProduct, setQuantityProduct] = useState(0);

  function onAdd(quantity){
    setQuantityProduct(quantity+quantityProduct);
  }

  return (
    <>
      <NavBar quantityProduct={quantityProduct} />
      <ItemListContainer greeting={"Bienvenidos!"} onAdd={onAdd} />
    </>
  );
}

export default App;

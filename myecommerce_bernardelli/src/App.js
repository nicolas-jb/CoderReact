import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import ItemListContainer from "./Components/Items/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";


function App() {
  let [quantityProduct, setQuantityProduct] = useState(0);

  function onAdd(quantity) {
    setQuantityProduct(quantity + quantityProduct);
  }

  return (
    <>
      <BrowserRouter>
        <NavBar quantityProduct={quantityProduct} />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos a Berna App!"} />}
          />
          <Route
            exact
            path="/category/:categoryId"
            element={<ItemListContainer greeting={"Bienvenidos a Berna App!"} />}
          />
          <Route
            exact
            path="/item/:itemId"
            element={<ItemDetailContainer onAdd={onAdd} />}
          />
          <Route exact path="*" element={<NotFound /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

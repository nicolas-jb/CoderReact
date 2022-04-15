import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/Items/ItemDetailContainer";
import ItemListContainer from "./Components/Items/ItemListContainer";
import NavBar from "./Components/NavBar/NavBar";
import NotFound from "./Components/NotFound/NotFound";
import Cart from "./Components/Cart";
import CartContext from "./Context/CartContext";

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <ItemListContainer greeting={"Bienvenidos a Berna App!"} />
              }
            />
            <Route
              exact
              path="/category/:categoryId"
              element={
                <ItemListContainer greeting={"Bienvenidos a Berna App!"} />
              }
            />
            <Route
              exact
              path="/item/:itemId"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;

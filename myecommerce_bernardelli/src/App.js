import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Próximamente..."} />
    </>
  );
}

export default App;

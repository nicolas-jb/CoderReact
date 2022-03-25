import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="Items">
        <h2>Las ofertas de la semana </h2>
        <ItemListContainer greeting={"Próximamente..."} />
      </div>
    </>
  );
}

export default App;

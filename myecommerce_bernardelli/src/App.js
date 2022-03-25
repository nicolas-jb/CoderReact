import React from "react";
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import "./Styles/Offers.css";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="Offers">
        <h2>Las ofertas de la semana </h2>
        <ItemListContainer greeting={"Próximamente..."} />
      </div>
    </>
  );
}

export default App;

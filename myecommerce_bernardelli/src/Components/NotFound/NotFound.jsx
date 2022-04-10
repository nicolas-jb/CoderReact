import React from "react";
import style from "./NotFound.module.css";
import image from "../../Assets/notfound.png";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function NotFound() {
  return (
    <div className={style.container}>
      <div>
        <div className={style.textContainer}>
          <h1 style={{ fontWeight: "bold" }}>Perdido en Berna App?</h1>
          <p className={style.text}>
            Parece que la página que deseas visitar no existe. Por favor revisa
            la url o haz click para ir al inicio.
          </p>
        </div>

        <Link to="/" className={style.button}>
          <Button variant="contained" color="warning" size="large">Inicio</Button>
        </Link>
      </div>
      <div className={style.imageNotFound}>
        <img src={image} alt="Robot - 404" />
      </div>
    </div>
  );
}

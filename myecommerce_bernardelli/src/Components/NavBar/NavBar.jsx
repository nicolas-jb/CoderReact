import React, { useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget";
import logo from "../../logo.png";
import Categories from "../../utils/Categories.json";
import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Button from "@mui/material/Button";
import { cartContext } from "../../Context/CartContext";

export default function NavBar() {
  const categories = Categories.data;

  let { getProductsQuantity } = useContext(cartContext);

  return (
    <>
      <Navbar bg="warning">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>
              <img alt="Logo" src={logo} width="10%" height="10%" />
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto" variant="black">
            {categories.map((c) => {
              return (
                <Link
                  key={c.id}
                  to={"/category/" + c.title}
                  className={style.link}
                >
                  <Button variant="secondary" size="large" color="dark">
                    {c.title}
                  </Button>
                </Link>
              );
            })}
          </Nav>
          <CartWidget quantity={getProductsQuantity()} />
        </Container>
      </Navbar>
    </>
  );
}

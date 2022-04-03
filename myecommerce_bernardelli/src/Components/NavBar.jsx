import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from "../logo.png";

export default function NavBar({ quantityProduct }) {
  return (
    <>
      <Navbar bg="warning">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="Logo" src={logo} width="10%" height="10%" />
          </Navbar.Brand>
          <Nav className="me-auto" variant="black">
            <Nav.Link href="#vehículos">Vehículos</Nav.Link>
            <Nav.Link href="#electrónica">Electrónica</Nav.Link>
            <Nav.Link href="#libros">Libros</Nav.Link>
          </Nav>
            <CartWidget quantity={quantityProduct} />
        </Container>
      </Navbar>
      ;
    </>
  );
}

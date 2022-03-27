import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.png";
import CartWidget from "./CartWidget";


export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <img alt="Logo" src={logo} width="50" height="50"/> Berna Commerce
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="vehículos">Vehículos</Nav.Link>
            <Nav.Link href="electronica">Electronica</Nav.Link>
            <Nav.Link href="libros">Libros</Nav.Link>
          </Nav>
          <CartWidget quantity={4}/> <>{/* Pongo una cantidad fija simplemente para probar, este valor será variable */}</>
        </Container>
      </Navbar>
    </>
  );
}

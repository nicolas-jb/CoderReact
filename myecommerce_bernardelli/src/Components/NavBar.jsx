import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.png";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="Logo" src={logo} width="10%" height="10%" />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#vehiculos">Vehículos</Nav.Link>
            <Nav.Link href="#electronica">Electronica</Nav.Link>
            <Nav.Link href="#libros">Libros</Nav.Link>
            <Nav.Link>
              <CartWidget quantity={4} />{" "}
              {/* Pongo una cantidad fija simplemente para probar, este valor será variable */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

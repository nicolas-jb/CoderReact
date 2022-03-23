import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../logo.png";

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">
            <img
              alt=""
              src={logo}
              width="50"
              height="50"
              style={{ borderRadius: "50%" }}
            />{" "}
            Berna Commerce
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="vehículos">Vehículos</Nav.Link>
            <Nav.Link href="electronica">Electronica</Nav.Link>
            <Nav.Link href="libros">Libros</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

/*
<Navbar bg="dark">
        <Navbar.Brand>Logo</Navbar.Brand>
      </Navbar>
*/

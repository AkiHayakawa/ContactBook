import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useContext } from "react";

import { usersContext } from "../usersContext"; 
const Header = () => {
      const { addUser } = useContext(usersContext);

  return (
    <Navbar bg="light" expand="lg" className="d-block">
      <Container>
        <Navbar.Brand onClick={addUser} href="/contacts">Contacts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/create">AddContact</Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

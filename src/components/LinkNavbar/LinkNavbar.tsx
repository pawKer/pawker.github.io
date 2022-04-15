import React from "react";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "./LinkNavbar.css";
export const LinkNavbar = () => {
  return (
    <Row>
      <Navbar bg="dark" variant="dark" expand="lg" className={"link-navbar"}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ width: "100%" }} className={"mx-auto"} fill>
            <Nav.Item>
              <Nav.Link href="#about-section">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects-section">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#home">Experience</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Row>
  );
};

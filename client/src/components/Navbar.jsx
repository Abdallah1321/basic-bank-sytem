import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import logo from "../assets/banklogo.png"


const NavBar = () =>{
    return (
        <Navbar bg="light" variant="light" expand="lg" className="sticky-nav">
            <Container>
              <Navbar.Brand href="#home">
              <img src={logo} className="nav-logo" alt="React Logo" /> 
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" >
                <Nav className="justify-content-end" style={{ width: "100%" }}>
                <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/customer-list">View Customers</Nav.Link>
                  {/* <Nav.Link href="/create-transaction">Tranfer money</Nav.Link> */}
                  <Nav.Link href="/transaction-history">
                    Transaction History
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    )
}

export default NavBar;
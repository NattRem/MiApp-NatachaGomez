import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap"

const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home"><img src="logo.png" alt="logo" width="90" /></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Variedades</Nav.Link>
                <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar

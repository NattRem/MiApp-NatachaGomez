import React from 'react'
import "../estilos/NavBar.css"
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import {Link} from "react-router-dom"
import { NavDropdown } from 'react-bootstrap'



const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="bgNav">
                <Container>
                <Link to ="/"><img src="https://res.cloudinary.com/dlvolch1i/image/upload/v1639628893/WikyApp/logo_fonxmp.png" alt="logo" width="100" /></Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to ="/" className="nav-link" activeClassName="active">Home</Link>
                            <NavDropdown title="Variedades" id="collasible-nav-dropdown">
                                <Link to ="/categoria/vodka" className="dropdown-item">Vodka</Link>
                                <Link to ="/categoria/wisky" className="dropdown-item">Wisky</Link>
                                <Link to ="/categoria/Gin" className="dropdown-item">Gin</Link>
                            </NavDropdown>
                        </Nav>
                        
                        
                    </Navbar.Collapse>
                    <Link to="/cart"><img src= "https://res.cloudinary.com/dlvolch1i/image/upload/v1639628893/WikyApp/IconCarrito_j3nfxm.svg" alt="Icono Carrito" width="40" /></Link>
                </Container>
            </Navbar>
            
        </div>
    )
}

export default NavBar

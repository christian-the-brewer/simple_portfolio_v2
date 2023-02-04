import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from "../../assets/logo.png"

function Header() {
  return (
    <Navbar bg='black' variant='dark' expand="lg" className='navbar'>
        <Container>
            <Navbar.Brand href="/">__Christian Brewer__</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='me-auto'>
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link style={{color: "white"}} href="/projects">Portfolio</Nav.Link>
                <Nav.Link style={{color: "white"}} href="/about">About</Nav.Link>
                <Nav.Link style={{color: "white"}} href="/experience">Experience</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Logo from "../../assets/logo.png"
import Scroll from 'react-scroll'
import { scroller } from 'react-scroll'
import "../../styles/Header.css"

function Header() {
  return (
    <Navbar bg='black' variant='dark' expand="lg" className='navbar' sticky="top">
        <Container>
            <Navbar.Brand
            onClick={() => scroller.scrollTo("home", {
                smooth: true,
                offset: -70,
                duration: 500,
            })}
            href="/"
            >__Christian Brewer__</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto'>
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Nav.Link
                onClick={() => scroller.scrollTo("projects", {
                    smooth: true,
                    offset: 200,
                    duration: 500,
                })}
                style={{color: "white"}}
                // href="/projects"
                 >Portfolio</Nav.Link>
                <Nav.Link 
                onClick={() => scroller.scrollTo("about", {
                    smooth: true,
                    offset: 100,
                    duration: 500,
                })}
                style={{color: "white"}} 
                // href="/about"
                >About</Nav.Link>
                <Nav.Link
                onClick={() => scroller.scrollTo("experience", {
                    smooth: true,
                    offset: 150,
                    duration: 500,
                })}
                style={{color: "white"}}
                // href="/experience"
                 >Experience</Nav.Link>
            
                </Nav>
                <Navbar.Text>
                    <a href='christian_brewer_cv_feb_2023.pdf'
                    download="Christian Brewer Resume">
                        Resume
                    </a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header
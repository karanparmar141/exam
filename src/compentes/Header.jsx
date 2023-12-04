import React from 'react'
import { Col, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => {
    let login=localStorage.getItem('userdata')
    let arr=[login]
    console.log(login);
    return (
        <>

            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to='/' >home</Link></Nav.Link>
                            <Nav.Link><Link to='/men'>men</Link></Nav.Link>
                            <Nav.Link><Link to='/women'>women</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Col>
                        <p>{login==null?<Link to='/login'>login</Link>:'logout'}</p>
                        <p>{login==null?<Link to='/login'>sginup</Link>:'user'}</p>
                    </Col>
                </Container>
            </Navbar></>
    )
}

export default Header
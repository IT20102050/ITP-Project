import React from 'react'
import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './header.css';

const header = () => {
  return (
    <div>
      
      <Navbar className='headerC' bg="light" expand="lg">
  <Container >
  <Navbar.Brand href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll>

        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">About</Nav.Link>
        <Nav.Link href="#action2">Services</Nav.Link>

       <img src="/images/logo.JPG" alt=""/>

        <Nav.Link href="#action2">Contact Us</Nav.Link>
        <Nav.Link href="#action2">Blog</Nav.Link>
        <Nav.Link href="#action2">Register</Nav.Link>
   
      </Nav>
      <Nav className='m-auto'>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  

    </div>
  )
}

export default header;
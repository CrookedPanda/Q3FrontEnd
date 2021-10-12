import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'

function Navbars() {
    return(
      <Navbar bg="light" expand="lg">
        <LinkContainer to="/">
        <Navbar.Brand>Q3</Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
            <LinkContainer to="/Machinemonitoring">
            <Nav.Link>Machinemonitoring</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Components">
            <Nav.Link>Components</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Lifexpectancy">
            <Nav.Link>Lifexpectancy</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Account">
            <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>
    );

}

export default Navbars
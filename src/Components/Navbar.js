import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import navbar from '../Css/Navbar.css'

function Navbars() {
    return(
      <Navbar style={navbar}>
        <LinkContainer to="/">
        <Navbar.Brand>Q3</Navbar.Brand>
        </LinkContainer>
        <Nav>
            <LinkContainer className="mr-auto" to="/Machinemonitoring">
            <Nav.Link>Machinemonitoring</Nav.Link>
            </LinkContainer>
            <LinkContainer className="mr-auto" to="/Components">
            <Nav.Link>Components</Nav.Link>
            </LinkContainer>
            <LinkContainer className="mr-auto" to="/Lifexpectancy">
            <Nav.Link>Lifexpectancy</Nav.Link>
            </LinkContainer>
            <LinkContainer className="ms-auto" to="/Account">
            <Nav.Link>Account</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>
    );

}

export default Navbars
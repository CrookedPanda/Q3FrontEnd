import React from "react";
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {LinkContainer} from 'react-router-bootstrap'
import navbar from '../Css/Navbar.css'

function Navbars() {
    return(
      <div>
        <Navbar style={navbar}>
          <LinkContainer to="/">
          <Navbar.Brand>Q3</Navbar.Brand>
          </LinkContainer>
          <Nav className="justify-content-center" style={{ flex: 1}}>
              <LinkContainer to="/Components">
              <Nav.Link>Components</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Machinemonitoring">
              <Nav.Link>Machinemonitoring</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Lifexpectancy">
              <Nav.Link>Lifexpectancy</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav className="ms-auto">
            <LinkContainer className="ms-auto" to="/Account">
              <Nav.Link>Account</Nav.Link>
              </LinkContainer>
            </Nav>
        </Navbar>
        */
      </div>
    );

}

export default Navbars
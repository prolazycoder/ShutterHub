import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { logout } from "../../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import "./Header.css"; // Import styles for the header

export function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Navbar expand="lg" className="navbar fixed-top custom-navbar">
      <Container>
        <Nav.Link to = "/">
          <Navbar.Brand>
            <img className="custom-logo"
              src = '/images/Logo.png' 
              alt = 'ShutterHub'
            />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link to = "/upload">
              <i className="fas fa-upload"></i> 
              <span className="caption">Upload</span>
            </Nav.Link>
            <Nav.Link to = "/cart">
              <i className="fas fa-shopping-cart"></i> 
              <span className="caption">Cart</span>
            </Nav.Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                <Nav.Link to = "/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Nav.Link>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link to = "/login">
                <i className="fas fa-user"></i> Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

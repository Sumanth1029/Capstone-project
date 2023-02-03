import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "./Assets/Logo.svg";
import { LinkContainer } from "react-router-bootstrap";

function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Link>

            <Nav.Link>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
            </Nav.Link>

            <Nav.Link>
              <LinkContainer to="/menu">
                <Nav.Link>Menu</Nav.Link>
              </LinkContainer>
            </Nav.Link>

            <Nav.Link>
              <LinkContainer to="/reservations">
                <Nav.Link>Reservations</Nav.Link>
              </LinkContainer>
            </Nav.Link>

            <Nav.Link>
              <LinkContainer to="/order">
                <Nav.Link>Order Online</Nav.Link>
              </LinkContainer>
            </Nav.Link>

            <Nav.Link>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;

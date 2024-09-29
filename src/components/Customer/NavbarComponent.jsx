//import component react bootstrap
import { Container, Nav, Navbar, NavDropdown, Dropdown } from "react-bootstrap";

import logo from "../../assets/logo.png"

import { Link } from "react-router-dom";

//import fontawsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const NavbarComponent = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar expand="lg" fixed="top" bg="white">
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-items-center">
              {isLoggedIn ? (
                <Nav.Link href="/home">Beranda</Nav.Link>
              ) : (
                <Nav.Link href="/">Beranda</Nav.Link>
              )}

              <NavDropdown title="Ruangan" id="basic-nav-dropdown">
                <NavDropdown.Item href="/ruang-meeting">Ruang Meeting</NavDropdown.Item>
                <NavDropdown.Item href="/ruang-acara">Ruang Acara</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/cospace">Coworking</Nav.Link>

              {isLoggedIn ? (
                <>
                  <Nav.Link href="/order">Pesanan</Nav.Link>
                  <Dropdown>
                    <Dropdown.Toggle>
                      <FontAwesomeIcon icon={faCircleUser} />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/">Log Out</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              ) : (
                <Link to="/login" className="btn btn-teal">Login</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  )
}

export default NavbarComponent
import React from 'react'
import Button from 'react-bootstrap/Button';
import '../Components/NavBar.css';
import logo from "../assets/download (11).png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';

import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <Navbar expand="lg" fixed='top'>
        <Container>
          <Navbar.Brand to='/home'>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex gap-3">
              <Link to='/' style={{ textDecoration: "none",
    color: "inherit", marginTop:"8px"
    }}>Home</Link>
              <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="about-us">About Us</NavDropdown.Item>
                <NavDropdown.Item href="Our-Team">
                  Our Team
                </NavDropdown.Item>
                <NavDropdown.Item href="faqs">FAQ's</NavDropdown.Item>

                <NavDropdown.Item href="Booking">
                  Booking
                </NavDropdown.Item>
                <NavDropdown.Item href="error">
                  Error 404
                </NavDropdown.Item>
                <NavDropdown.Item href="log">
                  Login /Register
                </NavDropdown.Item>
              </NavDropdown>




              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="services">Service</NavDropdown.Item>

              </NavDropdown>


              <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="blog">Blogs</NavDropdown.Item>
              </NavDropdown>

              <Link to='/contact' style={{ textDecoration: "none",
    color: "inherit",marginTop:"8px"}}>Contact Us</Link>
              <Nav.Link >
                <FontAwesomeIcon icon={faMagnifyingGlass} className='ms-5' />
                </Nav.Link>
              <Nav.Link className='ms-3' >
                <FontAwesomeIcon icon={faPhone} className='me-2' />
               (+01) 999 888 777</Nav.Link>
              <Link to='/contact'   className='mt-2'>
                <Button className='navBtn text-start ms-5'>
                  <FontAwesomeIcon icon={faCircleArrowRight} className='me-2' />
                  Contact Us
                </Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

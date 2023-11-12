import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from "../assets/download (11).png";
import insta from '../assets/icons8-instagram-48.png';
import facebook from '../assets/icons8-facebook-48.png';
import twitter from '../assets/icons8-twitterx-48.png';
import linkedin from '../assets/icons8-linkedin-48.png';
import '../Components/Footer.css';

export default function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col md={3} sm={6}>
            <img src={logo} alt="logo" className='img-fluid img-logo' style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: '0px' }} />
            <p className='text-start'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro voluptate provident temporibus velit autem, porro omnis consequatur et.</p>
            <div className="footer-contact">
              <div className="footer-icon text-start">
                <FontAwesomeIcon icon={faPhone} className='ms-2' />
              </div>
              <div className="footer-text text-start">
                <h6>Contact-Us</h6>
                <h4>+1 123 456 7890</h4>
              </div>
            </div>
          </Col>
          <Col md={3} sm={6}>
            <h2 className='text-start'>Quick Links</h2>
            <ul className='text-start'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Booking</a></li>
              <li><a href="#">Faqs</a></li>
              <li><a href="#">Our Team</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h2 className='text-start'>Our services</h2>
            <ul className='text-start'>
              <li><a href="#">Dental care</a></li>
              <li><a href="#">Cardiac Clinic</a></li>
              <li><a href="#">Massega Threapy</a></li>
              <li><a href="#">Cardiology</a></li>
              <li><a href="#">Precise Diagonsis</a></li>
              <li><a href="#">Ambulance Services</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </Col>
          <Col md={3} sm={6}>
            <h2 className='text-start'>Subscribe</h2>
            <form action="" className='text-start'>
              <input type="email" placeholder='Enter Your Email' />
              <button type='submit' className='mt-3 sub'>Subscribe Now</button>
              <div className="social text-center pt-4">
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={insta} alt="" />
                <img src={linkedin} alt="" />
              </div>
            </form>
          </Col>
        </Row>
      </Container>
      <hr />
      <div className="footer-copyRight pt-2">
        <Container>
          <Row>
            <Col>
              <span>Copyright © 2023 Design & Developed by MAi Mohamed</span>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}
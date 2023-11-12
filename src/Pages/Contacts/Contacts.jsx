import React from 'react';
import './Contacts.css';
import Banner from '../../Components/Banner';
import { Col, Container, Form, Row,InputGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faGlobe, faMap } from '@fortawesome/free-solid-svg-icons';
import twitter from '../../assets/icons8-twitter-squared-45.png'
import linked from '../../assets/icons8-linkedin-45 (1).png';
import insta from '../../assets/icons8-instagram-45 (1).png';
import FormContact from '../../Components/FormContact';


export default function Contacts() {
  return (
<>
<Banner title="Contact Us" secTitle="Contact Us"/>
<section className='contact-us'>
<Container>
  <Row>
    <Col lg={6} md={6}>
    

   <FormContact/>
    </Col>


    <Col lg={6} md={6} className='pt-3'>
<div className="side">
  <div className="overlay">
    <h3 className='text-start'>Contact Us For Any <br/>Information</h3>
    <li className='text-start mt-4'><FontAwesomeIcon icon={faMap} className='me-2' style={{color:"white"}}/>Location</li>
    <hr style={{color:"whitesmoke", width:"53%"}}/>

    <p className='text-start' style={{color:"white"}}>2005 Stokes Isle Apt. 896,Venville 10010,USA.</p>

    <li className='text-start mt-4'><FontAwesomeIcon icon={faAddressCard}  className='me-2' style={{color: "#ffffff",}} />Email & Phone</li>
    <hr style={{color:"whitesmoke", width:"53%"}}/>

    <p className='text-start' style={{color:"white"}}>info@yourdomain.com
    <br/>
    (+68) 120034509
    </p>

    <li className='text-start mt-4'><FontAwesomeIcon icon={faGlobe}  className='me-2' style={{color: "#ffffff",}} />Follow Us</li>
    <hr style={{color:"whitesmoke", width:"53%" }}/>
   
<ul className='d-flex justify-content-start align-items-start' >
  <li>    <img src={twitter} className='img-fluid' />
</li>

  <li><img src={linked} className='img-fluid' /></li>
  <li><img src={insta} className='img-fluid' /></li>
</ul>






  </div>
</div>

    
    </Col>
  </Row>
</Container>

</section>

</>
  )
}

import React from 'react'
import './AboutUs.css';
import doctor from '../assets/banner.jpg';
import child from '../assets/child.jpg';
import doc2 from '../assets/doc2.jpg';
import { Link } from 'react-router-dom';
import { Container, Row ,Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAmbulance, faBedPulse, faHandHoldingMedical, faSyringe } from '@fortawesome/free-solid-svg-icons';
import test from '../assets/download (10).png';
export default function AboutUs() {
  return (
    <>
    <section className='about'>

        <Container>
            <Row>
                <Col lg={6} md={6}>

            <Row>

              <Col lg={6} md={6}>

                <img src={doctor} alt="doc" className='img-fluid mb-3 doctor' />
                <img src={child} alt="child" className='img-fluid child' />
                <img src={test} alt="" className='img fluid  square' style={{float:"inline-start"}} />



              </Col>  

              <Col  lg={6} md={6}>
              <img src={doc2} alt="doc2" className='img-fluid mt-3 nurse' />
              <div className="years mt-3 ">
                <h1 className='fw-bolder me-4' style={{lineHeight:"80px" ,fontSize:"95px",color:"#565acf"}}>20</h1>
                <h3 className='fs-4 fw-bold mt-4' style={{color:"#202379"}}>Year Experience</h3>
              </div>

              </Col> 
            </Row>
                </Col>










                <Col lg={6} md={6} className='pt-5 '>
                    <div className="about-content text-start">
                        <h4>About Us</h4>
                    <h1  className='ms-4'>The Great Place Of <br/>
                     Medical Hospital Center</h1>

                     <p className='ms-4'>We provide the special tips and advice’s of heath care treatment and high <br/>
                      level of best technology involve in
                       the our hospital.</p>
                       <img src={test} alt="" className='img fluid  square' />

                    </div>

 <ul className="first d-flex gap-3 justify-content-start text-start">

 <li className='mt-3' >
    <FontAwesomeIcon icon={faAmbulance} className='me-2 ms-2'/>
    Emergency Help
</li>
<li className='mt-3' >
<FontAwesomeIcon icon={faBedPulse} className='me-2 ms-2' />
    Qualified Doctors
</li>

 </ul>

 <ul className="second d-flex gap-3 justify-content-start text-start">

<li className='mt-3' >
<FontAwesomeIcon icon={faHandHoldingMedical} className='me-2 ms-2' />
   Best Professionals
</li>
<li className='mt-3' >
<FontAwesomeIcon icon={faSyringe} className='me-2 ms-2' />
   Medical Treatment
</li>
</ul>
<Link to='/about-us'  className='readBtn mt-2 ms-4'>Read More</Link>

                </Col>
                
            </Row>
        </Container>
    </section>
    
    </>
  )
}

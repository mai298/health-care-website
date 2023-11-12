import React from 'react'
import doctor from "../../assets/doctor.7c2bc96d67d3eba1d64a.png";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AboutUs from '../../Components/AboutUs';
import test from '../../assets/download (10).png';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import LatestNews from '../../Components/LatestNews';
import doc2 from'../../assets/member2.d03a0686030bcd2f05ec.jpg';
import teeth from'../../assets/teeth.jpg';
import doctors from '../../assets/doctors.jpg';
import surgery from '../../assets/surgery.jpg';
import nurse from '../../assets/download (5).jpeg';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import glassDoc from '../../assets/download (1).jpeg';
import BookingComp from '../../Components/BookingComp';
import mob from '../../assets/mobile.f82d73222992d2101a09.png';
import woman from '../../assets/women.eb5c49c523f7d6240d33.png';
import ServiceRow from '../../Components/ServiceRow';
import mos from '../../assets/mosalas.png';
import medical1 from'../../assets/icons8-stethoscope-100.png';
import medical2 from'../../assets//icons8-treatment-100.png';
import medical3 from'../../assets/icons8-medical-100 (3).png';

export default function Home() {
  return (
 <>
 <header className='mt-5'>
      <Container>
        <Row>
          <Col lg={6} md={6} className="mt-5">
            <h5 className="text-start">We Provide All Health Care Solution</h5>
            <h2 className="text-start">Protect Your Health And<br />Take Care Of Your<br />Health</h2>
            <Button className='headreBtn'><a href="#">Read More</a></Button>
            <span></span>
          </Col>
          <Col lg={4} md={6}>
            <div className="header-box">
              <img src={doctor} alt="doctor" className="img-fluid" />
              <img src={test} alt="" className="img-fluid square " />
            </div>
          </Col>
        </Row>
      </Container>
    </header>

 <AboutUs/>
 
<section className='works'>
  <Container>
    <div className="work-title">
      <h5 style={{color:"#f17c39" ,fontWeight:"bold"}}>working process</h5>
      <h1  className='fs-1 mb-5' style={{ fontWeight:"bold !important",color:"#1f2278"}}>How We Works?</h1>
    </div>
    <Row>
      <Col lg={4} md={6} className='work-card text-start'>
      <div class="work-num-bx  mt-5">01</div>
      <div className="work-content mt-4 ">
        <h4>Make Appointment</h4>
        <p>It is a long established fact that<br/> a
         reader will be distracted by<br/> the readable content of.
</p>
<a href="/booking">
  <Button className='workBtn'>
                  View More    
        <FontAwesomeIcon icon={faCircleArrowRight} className='ms-2' />

                </Button></a>
 
      </div>
     
      </Col>

      
      <Col lg={4} md={6} className='work-card2 text-start mt-2 '>
      <div class="work-num-bx mt-5">02</div>
      <div className="work-content2 mt-4 ">
        <h4>Take Treatment</h4>
        <p>It is a long established fact that<br/> a
         reader will be distracted by<br/> the readable content of.
</p>
</div>
<a href="/services">
<Button className='workBtn2'>
                  View More    
        <FontAwesomeIcon icon={faCircleArrowRight} className='ms-2' />

                </Button>
                </a>
      </Col>
      <Col lg={4} md={6} className='work-card text-start mt-2'>
      <div class="work-num-bx mt-5">03</div>
      <div className="work-content mt-4 ">
        <h4>Registration</h4>
        <p>It is a long established fact that<br/> a
         reader will be distracted by<br/> the readable content of.
</p>
<a href='/register'>
<Button className='workBtn '>
                  View More    
        <FontAwesomeIcon icon={faCircleArrowRight} className='ms-2' />

                </Button>
                </a>
</div>
      </Col>
    </Row>
  </Container>
</section>



<section className='book mx-auto'>
  <Container>
    <Row>
      <Col lg={6} md={6}>
        <img src={mos} alt="" className='img-fluid mo-anim' />
        <BookingComp/>
      </Col>
      <Col lg={6} md={6}>
        <div className='col-img d-flex '> 
        <img src={mob} className='img-fluid mt-5 mob' alt="" />
        <img src={woman} className='img-fluid woman' alt="" /></div>
       
      </Col>
    </Row>
  </Container>
</section>












<section className='service'>
  <Container>
    <Row>
      <Col lg={6} md={6}>
        <div className="service-content text-start ms-4 mt-5">
          <h5>Services</h5>
          <h1 style={{maxWidth:"25rem"}}>We Cover A Big Variety Of Medical Services</h1>
          <p>We provide the special tips and advice’s of heath care
             treatment and high level of best.</p>
             <a href="/services" >
              <Button className='SerBtn '>All Services</Button>
             </a>
        </div>
      </Col>

      <Col lg={6} md={4}>
        <div className='caro-bg mt-3'>
          <div className="service-row d-flex gap-1">
              <ServiceRow  serviceTitle="Diagnostics" serviceText="Phasellus venenatis porta rhoncus. Integer et viverra felis." serviceImg={medical1} />
      <ServiceRow serviceTitle="Treatment" serviceText="Phasellus venenatis porta rhoncus. Integer et viverra felis." serviceImg={medical2} />

      <ServiceRow serviceTitle="Surgery" serviceText="Phasellus venenatis porta rhoncus. Integer et viverra felis." serviceImg={medical3} />
  
          </div>
      
        </div>
      </Col>
    </Row>
  </Container>
 </section>


<section className='newss'>
  <Container>
    <Row>
    <LatestNews newsImg={teeth} titleImg={nurse} title="John deo" icon={faCalendar} date="21 July 2021" text="In This Hospital There Are Special Surgeon"/>
            <LatestNews newsImg={doctors} titleImg={doc2} title="Peter Packer"  icon={faCalendar} date="20 July 2021" text="Can You Get A Diflucan Prescriptopn Online?" />
            <LatestNews newsImg={surgery} titleImg={glassDoc} title="Sonar Moyna "  icon={faCalendar} date="19 July 2021" text=" Why Is Skin Surgeon Considered Underrated?"/>
    </Row>
  </Container>
</section>


 
 </>
  )
}
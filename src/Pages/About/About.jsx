import React from 'react';
import './About.css';
import Banner from '../../Components/Banner';
import AboutUs from '../../Components/AboutUs';
import Info from '../../Components/Info';
import {Row, Container } from 'react-bootstrap';
import DoctorsRow from '../../Components/DoctorsRow';
import doc1 from'../../assets/member1.22ac1d594f69ddaf3e08.jpg';
import doc2 from'../../assets/member2.d03a0686030bcd2f05ec.jpg';
import doc3 from'../../assets/member3.0d822ecc51b2532abe0e.jpg';
import LatestNews from '../../Components/LatestNews';
import teeth from'../../assets/teeth.jpg';
import doctors from '../../assets/doctors.jpg';
import surgery from '../../assets/surgery.jpg';
import nurse from '../../assets/download (5).jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import glassDoc from '../../assets/download (1).jpeg';
 

export default function About() {
  return (
<>
<Banner title="About Us" secTitle="About Us"/>
<AboutUs/>
<section className='info'>
<Container>

<Row >

<Info yearsNumber="120" title="Years With You" para="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."/>
<Info yearsNumber="400" title="Awards" para="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."/>
<Info yearsNumber="250" title="Doctors" para="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."/>
<Info yearsNumber="800" title="Satisfied Client" para="Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero."/>

</Row>
</Container>

</section>


<section className='doctors pt-5 pb-5 mx-auto'>
    <div className='doctor-text'>
    <h5 style={{color:"#f17c39" ,fontWeight:"bold"}}>Our Doctor</h5>

<h1 className='fs-1 mb-5' style={{lineHeight:"70px",letterSpacing:"4px",  fontWeight:"bolder",color:"#1f2278"}}>Meet Best Doctors</h1>
    </div>
    <Container>
        <Row className='mx-auto'>
        <DoctorsRow title="Dr. Addition Smith" text="Dentist" docImg={doc1}/>
<DoctorsRow title="Dr. Mahfuz Riad" text="Chiropractor" docImg={doc2}/>
<DoctorsRow title="Dr. David Benjamin" text="Cardiologist" docImg={doc3}/>
        </Row>
        </Container>
        </section> 
<section className='news pt-2 pb-5'>
<div className='news-text'>
    <h5 style={{color:"#f17c39" ,fontWeight:"bold"}}>Latest News</h5>

<h1 className='fs-1 mb-5' style={{lineHeight:"70px",letterSpacing:"4px",  fontWeight:"bolder",color:"#1f2278"}}>Our Latest News</h1>
    </div>
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

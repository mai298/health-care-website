import React from 'react';
import './OurTeam.css';
import { Container, Row } from 'react-bootstrap';
import DoctorsRow from '../../Components/DoctorsRow';
import doc1 from'../../assets/member1.22ac1d594f69ddaf3e08.jpg';
import doc2 from'../../assets/member2.d03a0686030bcd2f05ec.jpg';
import doc3 from'../../assets/member3.0d822ecc51b2532abe0e.jpg';
import doc4 from'../../assets/member4.9045579a47c3fd89b17c.jpg';
import doc5 from'../../assets/member5.24eb182159ea2d58610f.jpg';
import doc6 from'../../assets/member6.be2a77adde3dc48f9d5b.jpg';
import Banner from '../../Components/Banner';

export default function OurTeam() {
  return (
<>
<Banner title="Our Team" secTitle="Our Team"/>
<section className='team' >

    <Container>
        <Row>
        <DoctorsRow title="Dr. Addition Smith" text="Dentist" docImg={doc1}/>
<DoctorsRow title="Dr. Mahfuz Riad" text="Chiropractor" docImg={doc2}/>
<DoctorsRow title="Dr. David Benjamin" text="Cardiologist" docImg={doc3}/>
            <DoctorsRow title="Dr. Addition Smith" text="Dentist"            docImg={doc4}/>
            <DoctorsRow title="Dr. Mahfuz Riad" text="Chiropractor" docImg={doc5}/>
            <DoctorsRow title="Dr. David Benjamin" text="Cardiologist" docImg={doc6}/>

        </Row>
    </Container>

</section>
</>
  )
}

import React from 'react';
import './Error.css';
import Banner from '../../Components/Banner';
import { Button, Col, Container, Row } from 'react-bootstrap';
import notFound from'../../assets/404-img.png';

export default function Error() {
  return (
<>
<Banner title="Page Not Found" secTitle="Page Not Found"/>
<section className='not-found'>
    <Container>
        <Row>
            <Col lg={12} md={6}>
                <div className="error-content">
                    <img src={notFound} alt="" className='img-fluid' />
                    <h1 style={{color:"#1f2278",fontWeight:"bold"}}>The Page you were looking for,<br/> couldn't be found.</h1>
                    <p style={{color:"#4e4e4e" ,lineHeight:"30px"}}>The page you are looking for might have been removed, had its<br/> name changed, or is temporarily unavailable.</p>
                <a href='/home'>
                    <Button className='backBtn'>Back To Home</Button>

                </a>
                
                </div>
            </Col>
        </Row>
    </Container>
</section>
</>
  )
}

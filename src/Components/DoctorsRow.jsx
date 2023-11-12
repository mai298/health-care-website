import React from 'react';
import './DoctorsRow.css';
import { Col } from 'react-bootstrap';
import twitter from '../assets/xAbout (1).png'
import linked from '../assets/xAbout (3).png';
import insta from '../assets/xAbout (2).png';
import Card from 'react-bootstrap/Card';

export default function DoctorsRow({title ,text ,docImg}) {
  return (
<>
<Col lg={4} md={6} className='mt-3'>
<Card className='card-content mx-auto' style={{ width: '20rem' ,height:"35rem" }}>
<div className='hexagon mx-auto mt-5'>
      <Card.Img src={docImg} className='img-fluid'  />
      </div>
      <Card.Body>
        <Card.Title className='fs-3' style={{fontWeight:"bold",color:"#1f2278"}}> {title}</Card.Title>
        <Card.Text className='fs-5' style={{color:"#f17c39"}}>
        {text}
        </Card.Text>

        <div className="social pt-5  mt-5">
            <img src={insta} alt="" className='img-fluid mx-auto ms-2' />       
            <img src={twitter} alt="" className='img-fluid mx-auto ms-2' />       
                <img src={linked} alt="" className='img-fluid mx-auto ms-2' />       
    

     </div>
      </Card.Body>
    </Card>
    </Col>
</>
  )
}

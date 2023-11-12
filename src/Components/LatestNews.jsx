import React from 'react';
import './LatestNews.css';
import { Button, Card, CardBody, Col } from 'react-bootstrap';
import { faCalendar, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LatestNews({newsImg ,title ,titleImg,date,icon,text}) {
  return (
<>

<Col lg={4} md={6} sm={1} className='mt-5  '>

<Card className='news-content mx-auto ' style={{ width: '22rem' ,height:"35rem" }}>
      <Card.Img src={newsImg} className='mt-3 ms-3 img-fluid'/>

      <Card.Body>
        <Card.Title style={{color:"#f17c39"}}  className='fs-6 fw-bold text-center text-md-start'> 
        <img src={titleImg} className='img-fluid me-2' style={{width:"2rem", borderRadius:"80px"}} /> 
        {title}
        <div className='dateTitle text-end'>
            <FontAwesomeIcon icon={icon} className='me-1'/>
        {date}
        </div>
        
        </Card.Title>
        <Card.Text className='fs-3 mt-5 card-text  m-1  text-start text-md-start' style={{fontWeight:"bold",color:"#1f2278"}}>
    {text}
        </Card.Text>
      </Card.Body>
      <Button className='newsBtn text-start mb-4 ms-3'>
                  <FontAwesomeIcon icon={faCircleArrowRight} className='me-2' />
                  Read More
                </Button>
    </Card>
    
</Col>

</>
  )
}

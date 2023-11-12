import React from 'react';
import './ServiceRow.css';
import { Button, Col } from 'react-bootstrap';

export default function ServiceRow({serviceTitle, serviceText , serviceImg}) {
  
  return (
   <>

   
   <Col lg={4} md={6} className='  text-start mb-3'>
    <div className='service-card pt-4'>
      <div className="img-border ms-4 text-center"> 
           <img src={serviceImg} alt="" className='img-fluid sevImg' />
</div>
      <div className="service-content mt-4 ms-4 ">
        <h3>{serviceTitle}</h3>
        <p>{serviceText}
</p>
<a href='/services'>
  <Button className='serviceBtn mt-3'>
                  View More    
                </Button></a>
 
      </div>
      </div>
     
      </Col>
   
   </>
  )
}

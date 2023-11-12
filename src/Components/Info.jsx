import React from 'react';
import'./Info.css';
import { Row, Col } from 'react-bootstrap';

export default function Info({yearsNumber ,title , para}) {
  return (
<>
        <Col lg={3} md={6}>
        <div className="years mt-3 ms-5">
                <h1 className='fw-bolder me-4' style={{lineHeight:"80px" ,fontSize:"95px",color:"#565acf"}}>{yearsNumber}</h1>
                <h3 className='fs-4 fw-bold mt-4' style={{color:"#202379"}}>{title}</h3>
                <p className='fs-6' style={{color:"#7c6a5f"}}>{para}</p>
              </div>       
              
               </Col>
</>
  )
}

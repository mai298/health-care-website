import React from 'react';
import './Faqs.css';
import Banner from '../../Components/Banner';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

export default function Faqs() {
  return (
   <>
   <Banner title="Faq's" secTitle="Faq's"/>

   <section className='faqs-content '>

<Container>
<Row>
    <Col lg={6} md={4}  className='mt-3 '>
    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="0">
        <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>

      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>How do I withdraw from a subject?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>Understand Doctor Before You Regret?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>

      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>What types of systems do you Support?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


      <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>We Teach You How To Feel Better</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>How Can I Contact You</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>



    </Col>
    <Col lg={6} md={4}>




    <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>How Do I Withdraw From A Subject?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.

        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>What's A Payment Statement?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0" className=' mt-3 mb-3'>
        <Accordion.Header>How Can I Contact You?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>
      <Accordion>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How Do I Withdraw From A Subject?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>


      <Accordion defaultActiveKey="0" >
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>Understand Doctor Before You Regret</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>

      <Accordion>
      <Accordion.Item eventKey="1" className=' mt-3 mb-3'>
        <Accordion.Header>How Doctor Can Ease Your Pain?</Accordion.Header>
        <Accordion.Body style={{ backgroundColor: "#eeeefa"}}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
         of type and scrambled it to make a type specimen book.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>







    </Col>

</Row>

</Container>

   </section>
   </>
  )
}

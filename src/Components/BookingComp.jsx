import React from 'react';
import './BookingComp.css';
import {Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import  { useState } from 'react';
import DatePicker from 'react-datepicker';

export default function BookingComp({handleDateChange,selectedDate}) {
  return (
  <>
  <section >
    <Container>
        <Row>
            <Col lg={6} xl={12} md={6}>
                <div className='outer-div mx-auto'>
            <div className="form-content">
        <Form className='mx-auto text-start'>
        <h3 style={{color:"#373a86" ,fontWeight:"bold"}} className='text-center'>Book Appointment</h3>

        <Form.Select aria-label="Default select example">
      <option>Select Department</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
  <Form.Select className='mt-3' aria-label="Default select example">
      <option>Select Doctor</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>


<InputGroup className="mb-3">
    <Form.Control
        placeholder="Your Name"
        aria-label="Username"/>
</InputGroup>

  <Form.Group controlId="phoneNumber">
      <Form.Control
          type="tel"
          placeholder="Enter phone number"
          required
          
      />
  </Form.Group>


  <Form.Group controlId="dateField "  >
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="dd/MM/yyyy"
          className="form-control"
        />
 </Form.Group>
 <Button className='bookBtn mt-4 ms-5'>Appointment Now</Button>

</Form>
</div>
</div>
</Col>
        </Row>
    </Container>
</section>
  </>
  )
}

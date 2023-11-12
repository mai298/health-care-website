import React from 'react';
import './Booking.css';
import Banner from '../../Components/Banner';
import {Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import BookingComp from '../../Components/BookingComp';
export default function Booking() {

    const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
<>
<Banner title="Booking" secTitle="Booking"/>
<BookingComp handleDateChange={handleDateChange} selectedDate={selectedDate}/>

</>
  )
}

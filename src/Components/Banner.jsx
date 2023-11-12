import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Banner.css';


export default function Banner({title,secTitle}) {
  return (
<section className='banner'>
    <Container>

        <Row>
            <Col lg={12} md={12}>
                <h2>{title}</h2>
                <li className='mx-auto'>
                  <Link to='/home'>
                    <FontAwesomeIcon icon={faHome}/> Home
                  </Link>
                  / {secTitle}
                </li>

            </Col>
        </Row>
    </Container>
</section>
  )
}

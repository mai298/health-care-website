import React from 'react';
import './Log.css';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { useState } from 'react';


const Log = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
  };

 


  return (



<section className='log mx-auto '>     

 <h2 style={{color:"#565acf",fontWeight:"bold"}}>{isRegistering ? 'Register' : 'Login'}</h2>

    <Container>
        <Row>
            <Col lg={12} md={6}>
          
            <Form  className='form-cont  mt-4 mx-auto' > 
<InputGroup className="mt-1">
      <Form.Control aria-label="Name" placeholder='Name' />
    </InputGroup>
      <Form.Control
      className=' mt-1'
                placeholder="Password"
                value={password}
                 onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="inputPassword5"
      
        aria-describedby="passwordHelpBlock"
      />


       
        {isRegistering && (
          <div>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" value={email}
         onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>
            <br />
          </div>
        )}
        <Button type="button" >
          {isRegistering ? 'Register' : 'Login'}
        </Button>
        </Form>
      
      <p className='' style={{ position:"absolute",left:"40rem", top:"33rem"}}>
        {isRegistering ? 'Already have an account?' : 'Don\'t have an account?'}
        <Button  className='ms-2' type="button" onClick={handleToggleMode}>
          {isRegistering ? 'Login' : 'Register'}
        </Button>
      </p>
      </Col>
      </Row>
      </Container>
      </section>
  );
};

export default Log;
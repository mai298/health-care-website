import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

export default function FormContact() {

    const[name,setName]=useState("");

    const nameHandler=(e)=>{

        setName(e.target.value);
        console.log(name);
        }

const FormHandler=(event)=>{
event.preventDefault();
}

  return (
<>
            <Form onSubmit={FormHandler}>

              <InputGroup className="mb-3">
                  <Form.Control
                      placeholder="Your Name"
                      aria-label="Username"
                      onChange={nameHandler}/>
              </InputGroup>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Control type="email" placeholder="Your Email" required/>
                </Form.Group>


                <Form.Group controlId="phoneNumber">
                    <Form.Control
                        type="tel"
                        placeholder="Enter phone number"
                        required
                        
                    />
                </Form.Group>

                <Form.Select className='mt-3' aria-label="Default select example">
                    <option>Select Department</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </Form.Select>




                <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder='Message' rows={3} />
                </Form.Group>


                <Button type="submit">
                    Submit
                </Button>

            </Form>
        </>
    )
}

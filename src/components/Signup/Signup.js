import React from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Signup.css'

const Signup = () => (
    <div className="container">
        <div className="row" id="signuppage">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="surname">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control type="text" placeholder="Surname" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Tution's Email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="mobileno">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control type="number" placeholder="Mobile No." />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="tutionname">
                    <Form.Label>Tution Name</Form.Label>
                    <Form.Control type="text" placeholder="xyz coaching classes" />
                </Form.Group>

                <Form.Group controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>


                <Form.Row>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" value="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>


                <Link to="/login">
                    <Button variant="primary" type="submit">
                        Create Account
  </Button>
                </Link>


            </Form>
        </div>
    </div>
)

export default Signup;
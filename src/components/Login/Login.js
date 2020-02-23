import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'

const login = () => (
    <div className="container" >
        <div className="row" >
            <div className="col-lg-9">

            </div>
            <div className="col-lg-3" id="loginpage">
                <Form >
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="abc@def.com" />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="keeploggedin">
                        <Form.Check type="checkbox" label="Keep Logged In" />
                    </Form.Group>
                    <Link to="/">
                        <Button variant="outline-dark" type="submit">
                            Login
                        </Button>
                    </Link>
                    <Form.Text className="text-muted" id="right">
                        <Link to="/signup">New User</Link>
                    </Form.Text>
                </Form>
            </div>

        </div>

    </div>
)

export default login;
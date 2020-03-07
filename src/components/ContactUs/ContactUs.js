import React from 'react';
import './ContactUs.css'
import { Form, Button } from 'react-bootstrap';

const ContactUs = () => (
    <div id="contactus">
        <div className="container ">
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-8">
                    <h6>Want some more Information?</h6>
                    <p>We need a few details to reach you</p>
                    <Form id="contactusform">
                        <Form.Group controlId="mobileno">
                            <Form.Label>Mobile No</Form.Label>
                            <Form.Control
                                name="Mobile No"
                                type="number"
                                placeholder="0000000000">

                            </Form.Control>
                        </Form.Group>
                        <Button type="submit">Contact Me</Button>
                    </Form>

                </div>
                <div className="col-sm-4">
                    <h6>Want to reach us?</h6>
                    <p>You can reach us at</p>
                    <p>email: contactus@ganety.com</p>
                    <p>Phone No.: +91 9433333333</p>
                </div>

            </div>
        </div>
    </div>
)

export default ContactUs;
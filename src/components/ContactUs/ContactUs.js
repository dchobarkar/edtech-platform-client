import React, { Component } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

import './ContactUs.css';

class ContactUs extends Component {
    state = {
        mobilenum: ' ',
        show: false
    }
    contactnoHandler = (e) => {
        this.setState({
            mobilenum: e.target.value
        })
    }
    submitContactnumHandler = () => {
        this.setState({
            show: true
        })
        console.log(this.state.mobilenum)
    }

    closeHandler = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div className="fullscreen " id="contactus">
                <div className="container ">
                    <div className="row align-items-center">
                        <div className="col-sm-8">
                            <h6>Want some more Information?</h6>
                            <p>We need a few detail to reach you</p>

                            <Form id="contactusform">
                                <Form.Group>
                                    <Form.Label>Please Enter Your Mobile Number</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        name="conatactusmobileno"
                                        type="number"
                                        placeholder="0000000000"
                                        onChange={this.contactnoHandler}
                                    />
                                </Form.Group>
                                <Button
                                    variant="outline-dark"
                                    onClick={this.submitContactnumHandler}
                                >Contact Me
                                </Button>
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

                <Modal
                    centered
                    show={this.state.show}
                    onHide={this.closeHandler}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Thank you</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <i className="fas fa-mobile-alt"></i> We will reach you shortly.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeHandler}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div >
        )
    }
}
export default ContactUs;
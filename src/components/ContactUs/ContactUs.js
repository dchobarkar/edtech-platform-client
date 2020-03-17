import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../../axios-server';

import CustMobNoModal from './CustMobNoModal/CustMobNoModal';

import './ContactUs.css';

class ContactUs extends Component {
    state = {
        mobilenum: ' ',
        show: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitContactnumHandler = () => {
        const num = {
            mobileno: this.state.mobilenum
        }
        axios.post('/contactusmobileno.json', num)
            .then(response => console.log(response))
            .catch(error => console.log(error))

        this.closeHandler()
    }

    closeHandler = () => {
        this.setState({
            show: !this.state.show
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
                                        name="mobilenum"
                                        type="number"
                                        placeholder="0000000000"
                                        onChange={this.inputChangeHandler} />
                                </Form.Group>
                                <Button
                                    variant="outline-dark"
                                    onClick={this.submitContactnumHandler}>
                                    Contact Me
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

                <CustMobNoModal
                    show={this.state.show}
                    closestatus={this.closeHandler} />
            </div >
        )
    }
}
export default ContactUs;
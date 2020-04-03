import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../../axios-server';

import CustMobNoModal from './CustMobNoModal/CustMobNoModal';

import './ContactUs.css';

class ContactUs extends Component {
    state = {
        showmodal: false,
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = () => {
        const num = {
            mobile: this.state.mobile,
            time: new Date()
        }

        axios.post('/contactdata/teacher', num)
            .then(response => {
                this.modalHandler()
            })
            .catch(error => {
                alert(error.message)
            })
    }

    modalHandler = () => {
        this.setState({
            showmodal: !this.state.showmodal
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
                                        name="mobile"
                                        type="number"
                                        placeholder="0000000000"
                                        onChange={this.inputChangeHandler} />
                                </Form.Group>
                                <Button
                                    variant="outline-dark"
                                    onClick={this.submitHandler}>
                                    Contact Me
                                </Button>
                            </Form>
                        </div>

                        <div className="col-sm-4">
                            <h6>Want to reach us?</h6>
                            <p>You can reach us at</p>
                            <p>email: contactus@ganety.com</p>
                            <p>Phone No.: +91 9404168827</p>
                        </div>
                    </div>
                </div>

                <CustMobNoModal
                    showmodal={this.state.showmodal}
                    modalhandler={this.modalHandler} />
            </div >
        )
    }
}
export default ContactUs;
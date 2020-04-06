import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from '../../axios-server';

import LoadingSpinner from '../Spinner/Spinner';
import DModal from '../DModal/DModal';

import './ContactUs.css';

class ContactUs extends Component {
    state = {
        showmodal: false,
        error: false,
        errormsg: null,
        loading: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }
    modalHandler = () => {
        this.setState({
            showmodal: !this.state.showmodal
        })
    }

    submitHandler = () => {
        this.setState({ loading: true })
        const num = {
            mobile: this.state.mobile,
            time: new Date()
        }
        axios.post('/contactdata/teacher', num)
            .then(response => {
                this.modalHandler()
                this.setState({ loading: false })
            })
            .catch(error => { this.setState({ loading: false, error: true, errormsg: error.response.data.message }) })
    }

    render() {

        let contactform =
            <div className="col-sm-8">
                <h6>Want some more Information?</h6>
                <p>We need a few detail to reach you</p>

                <Form id="contactusform">
                    <Form.Group className="inputfield">
                        <Form.Label>Please Enter Your Mobile Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="mobile"
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

        if (this.state.loading) {
            contactform = <LoadingSpinner />
        }

        return (
            <div className="fullscreen " id="contactus">
                <div className="container ">
                    <div className="row align-items-center">

                        {contactform}

                        <div className="col-sm-4">
                            <h6>Want to reach us?</h6>
                            <p>You can reach us at</p>
                            <p>email: contactus@ganety.com</p>
                            <p>Phone No.: +91 9404168827</p>
                        </div>
                    </div>
                </div>

                <DModal
                    show={this.state.showmodal}
                    modalhandler={this.modalHandler}>
                    <i className="fas fa-mobile-alt"></i> We will reach you shortly.
                </DModal>

                {this.state.error ?
                    <DModal
                        show={this.state.error}
                        modalhandler={this.errorModalHandler}>
                        {Array.isArray(this.state.errormsg) ?
                            <>
                                {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                            </>
                            : < p > {this.state.errormsg}</p>}
                    </DModal> : null}
            </div >
        )
    }
}
export default ContactUs;
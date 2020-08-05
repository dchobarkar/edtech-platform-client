import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CModal from '../../customFunctions/CModal/CModal';
import CButton from '../../customFunctions/CButton/CButton';

import './ContactUs.css';

const ContactUs = React.memo(function ContactUs(props) {
    const [mobileNo, setMobileNo] = useState("");
    const [showNoSubmittedModal, setShowNoSubmittedModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const inputChangeHandler = (e) => {
        setMobileNo(e.target.value)
    }

    const noSubmittedConfirmationHandler = () => {
        setShowNoSubmittedModal(!showNoSubmittedModal)
    }

    // Send mobile no to bachend
    const mobileNoSubmitHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const num = {
            mobileNo: mobileNo,
            time: new Date()
        }
        axios.post("contactdata/teacher", num)
            .then(response => {
                setShowNoSubmittedModal(true)
                setIsLoading(false)
            }).catch(error => {
                setIsLoading(false)
            })
    }

    let contactForm =
        <React.Fragment>
            <h6>Want some more Information?</h6>
            <p>We need a few detail to reach you</p>

            <Form onSubmit={(e) => mobileNoSubmitHandler(e)}>
                <Form.Group className="inputfield">
                    <Form.Label>Please Enter Your Mobile Number</Form.Label>
                    <Form.Control
                        name="mobileNo"
                        type="text"
                        placeholder="0000000000"
                        required
                        pattern="^[0-9]{10}$"
                        title="Please enter a valid mobile number."
                        onChange={inputChangeHandler} />
                </Form.Group>

                <CButton
                    type="submit"
                    variant="outline-dark">
                    Contact Me
                </CButton>
            </Form>
        </React.Fragment>

    if (isLoading) {
        contactForm = <Spinner />
    }

    return (
        <React.Fragment>
            <div id="contactus" className="fullscreen container">
                <div className="row align-items-center">

                    <div className="col-sm-8">
                        {contactForm}
                    </div>

                    <div className="col-sm-4">
                        <h6>Want to reach us?</h6>
                        <p>You can reach us at</p>
                        <p>email: contactus@ganety.com</p>
                        <p>Phone No.: +91 9404168827</p>
                    </div>
                </div>
            </div >

            {/* Modal to be shown after successful mobile no submission */}
            <CModal
                show={showNoSubmittedModal}
                modalhandler={noSubmittedConfirmationHandler}>
                <i className="fas fa-mobile-alt"></i> We will reach you shortly.
            </CModal>

        </React.Fragment>
    )
})

export default withErrorHandler(ContactUs, axios);
import React from 'react';
import { Link } from 'react-router-dom';

import CButton from '../../customFunctions/CButton/CButton';

import './Services.css';

const Services = React.memo(function Services(props) {
    return (
        <div id="services" className="fullscreen container">
            <h4>GaNeTy provides you a wide range of services</h4>
            <div id="servicebox" className="row align-items-center">
                <div className="col-sm-4">
                    <h6>Test</h6>
                </div>

                <div className="col-sm-8">
                    <p>Create your own TEST SERIES or single test and publish it according to your will</p>
                    <p>You can save your test and set time for its publication</p>
                    <p>Include MCQs, Images, Text Answer-Questions in your test</p>
                </div>
            </div>

            <div id="servicebox" className="row align-items-center">
                <div className="col-sm-4">
                    <h6>Video Lectures</h6>
                </div>

                <div className="col-sm-8">
                    <p>Record your Lectures and upload them</p>
                    <p>Need assistance to record your lecture?</p>
                    <p>Contact us on our email</p>
                </div>
            </div>

            <div id="servicebox" className="row align-items-center">
                <div className="col-sm-4">
                    <h6>SMS & Email assistance</h6>
                </div>

                <div className="col-sm-8">
                    <p>Get in touch with your students through SMS & Emails</p>
                    <p>Send everyday report to parents</p>
                </div>
            </div>

            <Link to="/signup">
                <CButton variant="outline-dark">Start Now</CButton>
            </Link>
        </div>
    )
})

export default Services;
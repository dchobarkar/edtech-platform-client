import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Services.css'

const Services = () => (
    <div className="fullscreen">
        <section id="services">
            <h4>GaNeTy provides you a wide range of services</h4>
            <div className="container">

                <div className="row align-items-center" id="servicebox">
                    <div className="col-sm-4">
                        <h6>Test</h6>
                    </div>
                    <div className="col-sm-8">
                        <p>Create your own TEST SERIES or single test and publish it according to your will</p>
                        <p>You can save your test and set time for its publication</p>
                        <p>Include MCQs, Images, Text Answer-Questions in your test</p>
                    </div>
                </div>

                <div className="row align-items-center" id="servicebox">
                    <div className="col-sm-4">
                        <h6>Video Lectures</h6>
                    </div>
                    <div className="col-sm-8">
                        <p>Record your Lectures and upload them</p>
                        <p>Need assistance to record your lecture?</p>
                        <p>Contact us on our email</p>
                    </div>
                </div>

                <div className="row align-items-center" id="servicebox">
                    <div className="col-sm-4">
                        <h6>SMS & Email assistance</h6>
                    </div>
                    <div className="col-sm-8">
                        <p>Get in touch with your students through SMS & Emails</p>
                        <p>Send everyday report to parents</p>
                    </div>
                </div>
            </div>

            <Link to="/signup">
                <Button variant="outline-dark">Start Now</Button>
            </Link>
        </section>

    </div >
)

export default Services;
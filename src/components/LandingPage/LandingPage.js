import React from 'react';
import { Link } from 'react-router-dom';

import CButton from '../../customFunctions/CButton/CButton';

import './LandingPage.css';

const LandingPage = React.memo(function LandingPage(props) {
    return (
        <React.Fragment>
            <section id="landingpagesection" >
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h3>Welcome to your own online platform</h3>
                            <p>Create your own virtual classroom to reach out hundreds of thousands of students across India</p>
                        </div>

                        <div className="col-sm-6">
                            <Link to={"/newcourse"}>
                                <CButton
                                    variant="outline-dark">
                                    Create Now
                                </CButton>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <section id="landingpagesection">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <Link to="/newcourse">
                                <CButton
                                    variant="outline-dark">
                                    Start Now
                                </CButton>
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <h5>Create Multiple Courses</h5>
                            <p>Design different courses for targeted students.</p>
                            <p>Provide various kind of resoures as your will</p>
                        </div>

                    </div>
                </div>
            </section>

            <section id="landingpagesection">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h5>Simple Setup</h5>
                            <p>Create an account and start your classroom</p>
                        </div>

                        <div className="col-sm-6">
                            <Link to="/signup">
                                <CButton
                                    variant="outline-dark">
                                    Start Now
                                </CButton>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>

            <section id="landingpagesection">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <Link to="/signup">
                                <CButton
                                    variant="outline-dark">
                                    Start Now
                                </CButton>
                            </Link>
                        </div>

                        <div className="col-sm-6">
                            <h5>Pay-as-you-use</h5>
                            <p>No registration charges</p>
                            <p>No minimum payment requirement</p>
                            <p>Pay as students join your classroom</p>
                        </div>

                    </div>
                </div>
            </section>

            <section id="landingpagesection">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-sm-6">
                            <h5>Broad array of services</h5>
                            <p>Choose from various servies offered to create your unique classroom</p>
                        </div>

                        <div className="col-sm-6">
                            <Link to="/services">
                                <CButton
                                    variant="outline-dark">
                                    Services
                                </CButton>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </React.Fragment>
    )
})

export default LandingPage;

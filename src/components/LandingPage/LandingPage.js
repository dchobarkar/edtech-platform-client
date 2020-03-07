import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
    < div id="landingpage">
        <section id="welcomepage" >
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <h3>Welcome to your own online platform</h3>
                        <p>Create your own virtual classroom to reach out hundreds of thousands of students across India</p>
                    </div>
                    <div className="col-sm-6">
                        <Button type="submit">Join Now</Button>
                    </div>
                </div>
            </div>
        </section>

        <section id="multipleclassroom">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <Button type="submit">Start Now</Button>
                    </div>
                    <div className="col-sm-6">
                        <h5>Create Multiple Courses</h5>
                        <p>Design different courses for targeted students.</p>
                        <p>Provide various kind of resoures as your will</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="simplesetup">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <h5>Simple Setup</h5>
                        <p>Create an account and start your classroom</p>
                    </div>
                    <div className="col-sm-6">
                        <Button type="submit">Start Now</Button>

                    </div>
                </div>
            </div>
        </section>

        <section id="payasyouuse">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <Button type="submit">Start Now</Button>
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

        <section id="servicesoffered">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-sm-6">
                        <h5>Broad array of services</h5>
                        <p>Choose from various servies offered to create your unique classroom</p>
                    </div>
                    <div className="col-sm-6">
                        <Button type="submit">Services</Button>
                    </div>
                </div>
            </div>
        </section>

        {/* <div className="row" id="buttonpage">
            <div className="col-sm-6">
                <Link to="/newtest">
                    <Button variant="outline-dark"><i className="fas fa-file-alt fa-10x"></i></Button>
                </Link>
                <h3>Create New Test kalljksdgkjlsajggj</h3>
            </div>

            <div className="col-sm-6">
                <Link to="/mytest">
                    <Button variant="outline-dark"><i className="fas fa-book fa-10x"></i></Button>
                </Link>
                <h3>My Tests</h3>
            </div>
        </div> */}
    </div >
)

export default LandingPage;
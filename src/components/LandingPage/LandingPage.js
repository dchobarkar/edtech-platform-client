import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
    < div className="container" id="fullscreen" >
        <div className="row" id="buttonpage">
            <div className="col-sm-6">
                <Link to="/newtest">
                    <Button variant="outline-dark"><i className="fas fa-file-alt fa-10x"></i></Button>
                </Link>
                <h3>Create New Test</h3>
            </div>

            <div className="col-sm-6">
                <Link to="/mytest">
                    <Button variant="outline-dark"><i class="fas fa-book fa-10x"></i></Button>
                </Link>
                <h3>My Tests</h3>
            </div>
        </div>
    </div >
)

export default LandingPage;
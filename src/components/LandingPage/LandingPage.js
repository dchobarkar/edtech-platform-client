import React from 'react';
import './LandingPage.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LandingPage = () => (
    < div className="container" >
        <div className="row" id="buttonpage">
            <div className="col-sm-6">
                <Link to="/newtest">
                    <Button variant="outline-dark"><i className="fas fa-file-alt fa-10x"></i></Button>
                    <h3>Create New Test</h3>
                </Link>
            </div>
            <div className="col-sm-6">
                <Link to="/mytest">
                    <Button variant="outline-dark"><i class="fas fa-book fa-10x"></i></Button>
                    <h3>My Tests</h3>
                </Link>
            </div>
        </div>

    </div >
)

export default LandingPage;
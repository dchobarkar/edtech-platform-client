import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import CButton from "../../customFunctions/CButton/CButton";

import './NotFoundPage.css'

const NotFoundPage = React.memo(function NotFoundPage(props) {
    // Variable to store cto fired status
    const [isCTOFired, setIsCTOFired] = useState(false)

    // Function to show fired cto page
    const fireCTOHandler = () => {
        setIsCTOFired(true)
    }

    return (
        <div id="notfoundpage" className="fullscreen container">
            <div className="row">
                {isCTOFired ?
                    // Part to be shown afte firing CTO
                    <React.Fragment>
                        <h4>Bye - Bye Saurabh</h4>
                        <div id="ctofired">
                            <Image
                                alt={"Saurabh Lodha"}
                                src={require("../../assets/IMG/CTO_Fired.jpeg")}
                                roundedCircle />
                            <h6>Saurabh, we had fun working with you</h6>
                            <p>We are not saying revenge is in Saurabh's nature, but you might want to change your IP address now!</p>
                        </div>
                    </React.Fragment>
                    : //Part to be shown before firing CTO   
                    <React.Fragment>
                        <h4>Whoops!</h4>
                        <h6>404 - Page not found</h6>
                        <div id="ctoprofile">
                            <p>Our CTO must be fired for this unacceptable failure!!!</p>
                            <Image
                                alt={"Saurabh Lodha"}
                                src={require("../../assets/IMG/CTO_Profile.jpeg")}
                                roundedCircle />
                            <CButton
                                variant="outline-danger"
                                onClick={fireCTOHandler} >
                                Fire Saurabh
                            </CButton>
                            <p>In a good mood? Let him keep his job</p>
                        </div>
                    </React.Fragment>
                }
                <p>Return to <Link to="/" className="no-decoration">Homepage</Link></p>
            </div>
        </div>
    )
})

export default NotFoundPage;
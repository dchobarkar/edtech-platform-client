import React, { Component } from 'react';

import './NotFoundPage.css'
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NotFoundPage extends Component {
    state = {
        show: false
    }

    fireCTOHandler = () => {
        this.setState({ show: true })
    }

    render() {
        return (
            <div className="fullscreen">
                <div className="container">
                    <div className="row" id="notfoundpage">
                        <h4>Whoops!</h4>
                        <h6>404 - Page not found</h6>

                        {this.state.show ? null :
                            <div id="ctoprofile">
                                <p id="blockp">Our CTO must be fired for this unacceptable failure!!!</p>
                                <Image id="ctoimage" alt={"Saurabh Lodha"} src={require("../../assets/profile.jpeg")} roundedCircle />
                                <Button
                                    variant="outline-dark"
                                    onClick={this.fireCTOHandler} >
                                    Fire Saurabh
                                </Button>
                                <p>In a good mood? Let him keep his job</p>
                            </div>}
                        {this.state.show ?
                            <div id="ctofired">
                                <Image id="firedimage" alt={"Saurabh Lodha"} src={require("../../assets/fired.jpeg")} roundedCircle />
                                <h6>Saurabh, we had fun working with you</h6>
                                <p>We are not saying revenge is in Saurabh's nature, but you might want to change your IP address now!</p>
                            </div> : null}
                        <p>Return to the <Link to="/">Homepage</Link></p>
                    </div>
                </div>
            </div>)
    }
}

export default NotFoundPage
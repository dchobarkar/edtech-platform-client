import React, { Component } from 'react';

import DModal from '../DModal/DModal';
import { Button } from 'react-bootstrap';

class LogOut extends Component {
    state = {
        show: true
    }

    modalHandler = () => (
        this.setState({ show: !this.state.show })
    )

    logOutHandler = () => {
        localStorage.clear()
        this.props.history.push("/")
        this.modalHandler()
    }

    nopeLogOutHandler = () => {
        this.props.history.goBack()
    }

    render() {
        return (
            <>
                {localStorage.authkey ?
                    <DModal show={this.state.show}
                        modalhandler={this.modalHandler} >

                        <p>Are you sure you want to log-out?</p>
                        <Button
                            className="float-right"
                            variant="outline-dark"
                            onClick={this.logOutHandler}>
                            LogOut
                        </Button>
                        <Button
                            variant="outline-dark"
                            onClick={this.nopeLogOutHandler}>
                            Nope
                    </Button>
                    </DModal> : null}

                <div className="fullscreen"></div>
            </>
        )
    }
}

export default LogOut;
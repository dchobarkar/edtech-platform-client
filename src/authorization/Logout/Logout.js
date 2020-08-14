import React, { useState, useEffect } from 'react';

import CModal from '../../customFunctions/CModal/CModal';
import CButton from '../../customFunctions/CButton/CButton';

const Logout = React.memo(function Logout(props) {
    // Show logout model variable
    const [showLogoutModal, setShowLogoutModal] = useState(false)

    // Check if the user is already logged in
    useEffect(() => {
        if (localStorage.authKey) {
            setShowLogoutModal(true)
        } else {
            props.history.push("/login")
        }
    }, [props.history])

    // Logout modal toggler
    const modalHandler = () => {
        setShowLogoutModal(!showLogoutModal)
    }

    // Logout the user
    const logOutHandler = () => {
        localStorage.clear();
        props.history.push("/")
    }

    // Send user back to its current page
    const nopeLogOutHandler = () => {
        props.history.go(-1)
    }

    return (
        <React.Fragment>
            <CModal
                show={showLogoutModal}
                backdrop="static"
                keyboard={false}
                onHide={modalHandler}>

                <p>Are you sure you want to logout?</p>

                <CButton
                    variant="outline-dark"
                    onClick={nopeLogOutHandler}>
                    Nope
                </CButton>

                <CButton
                    className="float-right"
                    variant="outline-dark"
                    onClick={logOutHandler}>
                    Logout
                </CButton>
            </CModal>

            <div className="fullscreen"></div>
        </React.Fragment>
    )
})

export default Logout;
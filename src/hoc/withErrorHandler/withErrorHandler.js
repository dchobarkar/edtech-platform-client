import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [show, setShow] = useState(false)
        const [error, setError] = useState(null)

        const reqInterceptor = axios.interceptors.request.use(config => {
            setError(null);
            return config;
        }, function (err) {
            return Promise.reject(err)
        })
        const resInterceptor = axios.interceptors.response.use(response => {
            return response;
        }, function (err) {

            // Extract correct error message 
            errorMsgHandler(err)
            return Promise.request(err)
        })

        useEffect(() => {
            return () => {
                axios.interceptors.request.eject(reqInterceptor);
                axios.interceptors.response.eject(resInterceptor);
            }
        }, [reqInterceptor, resInterceptor])

        const errorConfirmedHandler = () => {
            setShow(false)
            setError(null)
        }

        // Extract correct error message from error
        const errorMsgHandler = (error) => {
            let msg = ""
            if (error.response) {
                msg = error.response.data.message
            } else if (error.request && error.request.response) {
                msg = error.request.response
            } else {
                msg = error.message
            }
            if (msg === "Unauthorized") {
                console.log("I'm here.")
            }
            setShow(true)
            setError(msg)
        }

        return (
            <React.Fragment>
                <WrappedComponent {...props} />

                {/* Modal to be shown if there is any error present */}
                <Modal
                    centered
                    show={show}
                    onHide={errorConfirmedHandler}>
                    <Modal.Body>
                        {Array.isArray(error) ?
                            error.map((msg, Index) => { return <p key={Index}>{msg}</p> })
                            : <p>{error}</p>
                        }
                    </Modal.Body>
                </Modal>
            </React.Fragment >
        )
    }
}

export default withErrorHandler;
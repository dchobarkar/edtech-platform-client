import React, { useState, useEffect } from "react";
import { Modal } from 'react-bootstrap';

const withErrorHandler = (WrappedComponent, axios) => {
    return props => {
        const [show, setShow] = useState(false)
        const [error, setError] = useState(null)

        const reqInterceptor = axios.interceptors.request.use(req => {
            setError(null)
            return req;
        })
        const resInterceptor = axios.interceptors.response.use(res => res, err => {
            errorMsgHandler(err)
            return err
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

        const errorMsgHandler = (error) => {
            let msg = ""
            if (error.response) {
                msg = error.response.data.message
            } else if (error.request && error.request.response) {
                msg = error.request.response
            } else {
                msg = error.message
            }
            setShow(true)
            setError(msg)
        }

        return (
            <React.Fragment>
                <Modal
                    centered
                    show={show}
                    onHide={errorConfirmedHandler}>
                    <Modal.Body>
                        {Array.isArray(error) ?
                            error.map((msg, Index) => { return <p key={Index}>{msg}</p> })
                            : <p> {error}</p>
                        }
                    </Modal.Body>
                </Modal>

                <WrappedComponent {...props} />
            </React.Fragment>
        )
    }
}

export default withErrorHandler;
import React, { Component } from "react";
import { Modal } from 'react-bootstrap';

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null,
            show: false
        }
        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({ error: null })
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error, show: true })
                console.log(this.state)
                return error
            }
            )
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <>
                    <Modal
                        centered
                        show={this.state.show}
                        onHide={this.errorConfirmedHandler}>
                        <Modal.Body>
                            {this.state.error ? this.state.error.response.data.message : null}
                        </Modal.Body>
                    </Modal>

                    <WrappedComponent {...this.props} />
                </>
            )
        }
    }
}
export default withErrorHandler;
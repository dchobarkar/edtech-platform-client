import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import axios from '../../axios-server';

import LoadingSpinner from '../../components/Spinner/Spinner';
import DModal from '../../components/DModal/DModal'

import './Signup.css';

class Signup extends Component {
    state = {
        loading: false,
        error: false,
        errormsg: null,
        success: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }

    newUserHandler = () => {
        this.setState({ loading: true })
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            classname: this.state.classname,
            mobile: this.state.mobile,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/auth/signup', user)
            .then(response => {
                this.setState({ loading: false, success: true })
            })
            .catch(error => { this.setState({ loading: false, error: true, errormsg: error.response.data.message }) })
    }

    successModalHandler = () => {
        this.props.history.push("/login")
    }

    render() {
        let signup =
            <Form>
                <Form.Row>
                    <Form.Group as={Col} className="inputfield">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            name="firstname"
                            onChange={this.inputChangeHandler} />
                    </Form.Group>

                    <Form.Group as={Col} className="inputfield">
                        <Form.Label>Surname</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Surname"
                            name="lastname"
                            onChange={this.inputChangeHandler} />
                    </Form.Group>
                </Form.Row>

                <Form.Group className="inputfield">
                    <Form.Label>Class Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="xyz coaching classes"
                        name="classname"
                        onChange={this.inputChangeHandler} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} className="inputfield">
                        <Form.Label>Mobile No.</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Mobile No."
                            name="mobile"
                            onChange={this.inputChangeHandler} />
                    </Form.Group>

                    <Form.Group as={Col} className="inputfield">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Class's Email"
                            name="email"
                            onChange={this.inputChangeHandler} />
                    </Form.Group>
                </Form.Row>

                <Form.Group className="inputfield">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        autoComplete="off"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.inputChangeHandler} />
                </Form.Group>

                <Button
                    className="float-right"
                    variant="outline-dark"
                    onClick={this.newUserHandler}>
                    Create Account
            </Button>
            </Form>

        if (this.state.loading) {
            signup = <LoadingSpinner />
        }

        return (
            <div className="fullscreen">
                <div className="container">
                    <div className="row" id="signuppage">

                        {signup}

                        {this.state.error ?
                            <DModal
                                show={this.state.error}
                                modalhandler={this.errorModalHandler}>
                                {Array.isArray(this.state.errormsg) ?
                                    <>
                                        {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                                    </>
                                    : < p > {this.state.errormsg}</p>}
                            </DModal> : null}

                        <DModal show={this.state.success}
                            modalhandler={this.successModalHandler}>
                            <h5>Congratulations!!!</h5>
                            <p>Let's Login first and start your journey.</p>
                            <Button
                                className="float-right"
                                variant="outline-dark"
                                onClick={this.successModalHandler}>
                                Let's Start
                            </Button>
                        </DModal>

                    </div>
                </div >
            </div >
        )
    }
}

export default Signup;
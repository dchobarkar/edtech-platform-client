import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';

import './Login.css';

class Login extends Component {
    state = {

    }

    inputchangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        this.props.onAuth(this.state.email, this.state.password)
    }

    render() {
        return (
            <div className="fullscreen">
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-9">

                        </div>

                        <div className="col-lg-3" id="loginpage">
                            <Form onSubmit={this.submitHandler}>
                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        name="email"
                                        type="email"
                                        placeholder="abc@def.com"
                                        onChange={this.inputchangeHandler} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        onChange={this.inputchangeHandler} />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check
                                        type="checkbox"
                                        label="Keep Logged In" />
                                </Form.Group>

                                <Button
                                    className="float-right"
                                    variant="outline-dark">
                                    Login
                                </Button>
                            </Form>

                            <p>Don't have an account? <Link to={"/signup"}>Start here</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(null, mapDispatchToProps)(Login);
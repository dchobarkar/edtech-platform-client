import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/auth';

import './Login.css'

class Login extends Component {
    state = {}

    inputchangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (event) => {
        // console.log(this.state);
        this.props.onAuth(this.state.email, this.state.password)
    }

    render() {
        return (
            <div className="container" id="fullscreen">
                <div className="row" >
                    <div className="col-lg-9">

                    </div>

                    <div className="col-lg-3" id="loginpage">
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="abc@def.com"
                                    onChange={this.inputchangeHandler} />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    onChange={this.inputchangeHandler} />
                            </Form.Group>

                            <Form.Group controlId="keeploggedin">
                                <Form.Check type="checkbox" label="Keep Logged In" />
                            </Form.Group>

                            {/* <Link to="/"> */}
                            <Button variant="outline-dark" type="submit">
                                Login
                                </Button>
                            {/* </Link> */}

                            <Form.Text className="text-muted" id="right">
                                <Link to="/signup">
                                    New User
                                    </Link>
                            </Form.Text>
                        </Form>
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
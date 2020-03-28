import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import axios from '../../axios-server';
import * as actions from '../../store/actions/actionTypes';

import './Signup.css';

class Signup extends Component {
    state = {}

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    userInfoSaver = () => {
        const user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            classname: this.state.classname,
            mobile: this.state.mobile,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/auth/signup', user)
            .then((response => console.log(response)))
            .catch(error => {
                console.log(error)
                alert(error)
            })
        console.log(user)
    }

    render() {
        return (
            <div className="fullscreen">
                <div className="container">
                    <div className="row" id="signuppage">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="Name"
                                        name="firstname"
                                        onChange={this.inputChangeHandler} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="Surname"
                                        name="lastname"
                                        onChange={this.inputChangeHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Class Name</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    placeholder="xyz coaching classes"
                                    name="classname"
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} >
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="number"
                                        placeholder="Mobile No."
                                        name="mobile"
                                        onChange={this.inputChangeHandler} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="email"
                                        placeholder="Class's Email"
                                        name="email"
                                        onChange={this.inputChangeHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            {/* <Link to="/login"> */}
                            <Button
                                variant="outline-dark"
                                // onClick={() => this.props.newuserregister(this.state)}
                                onClick={this.userInfoSaver}>
                                Create Account
                                </Button>
                            {/* </Link> */}
                        </Form>
                    </div>
                </div >
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        newuserregister: (newuser) => dispatch({
            type: actions.NEWUSERREGISTER, value: { newuser }
        })
    }
}

export default connect(null, mapDispatchToProps)(Signup);
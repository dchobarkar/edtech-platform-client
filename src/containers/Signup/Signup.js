import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionTypes';

import './Signup.css'

class Signup extends Component {
    state = {
        name: '',
        surname: '',
        email: '',
        mobileno: '',
        tutionname: '',
        address: '',
        state: '',
        city: '',
        pincode: ''
    }

    newuserHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    userInfoSaver = () => {
        console.log(this.state)
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
                                        name="name"
                                        onChange={this.newuserHandler} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Surname</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="Surname"
                                        name="surname"
                                        onChange={this.newuserHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="email"
                                        placeholder="Tution's Email"
                                        name="email"
                                        onChange={this.newuserHandler} />
                                </Form.Group>

                                <Form.Group as={Col} >
                                    <Form.Label>Mobile No.</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="number"
                                        placeholder="Mobile No."
                                        name="mobileno"
                                        onChange={this.newuserHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Tution Name</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    placeholder="xyz coaching classes"
                                    name="tutionname"
                                    onChange={this.newuserHandler} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    placeholder="Apartment, studio, or floor"
                                    name="address"
                                    onChange={this.newuserHandler} />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        as="select"
                                        name="state"
                                        onChange={this.newuserHandler}>
                                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                        <option value="Chandigarh">Chandigarh</option>
                                        <option value="Chhattisgarh">Chhattisgarh</option>
                                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                        <option value="Daman and Diu">Daman and Diu</option>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Puducherry">Puducherry</option>
                                        <option value="Goa">Goa</option>
                                        <option value="Gujarat">Gujarat</option>
                                        <option value="Haryana">Haryana</option>
                                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                        <option value="Jharkhand">Jharkhand</option>
                                        <option value="Karnataka">Karnataka</option>
                                        <option value="Kerala">Kerala</option>
                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                        <option value="Maharashtra">Maharashtra</option>
                                        <option value="Manipur">Manipur</option>
                                        <option value="Meghalaya">Meghalaya</option>
                                        <option value="Mizoram">Mizoram</option>
                                        <option value="Nagaland">Nagaland</option>
                                        <option value="Odisha">Odisha</option>
                                        <option value="Punjab">Punjab</option>
                                        <option value="Rajasthan">Rajasthan</option>
                                        <option value="Sikkim">Sikkim</option>
                                        <option value="Tamil Nadu">Tamil Nadu</option>
                                        <option value="Telangana">Telangana</option>
                                        <option value="Tripura">Tripura</option>
                                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                                        <option value="Uttarakhand">Uttarakhand</option>
                                        <option value="West Bengal">West Bengal</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        onChange={this.newuserHandler} />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Label>Pin Code</Form.Label>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="Pin Code"
                                        name="pincode"
                                        onChange={this.newuserHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.newuserHandler} />
                            </Form.Group>

                            <Link to="/login">
                                <Button
                                    variant="outline-dark"
                                    // onClick={() => this.props.newuserregister(this.state)}
                                    onClick={this.userInfoSaver}
                                >
                                    Create Account
                                </Button>
                            </Link>
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
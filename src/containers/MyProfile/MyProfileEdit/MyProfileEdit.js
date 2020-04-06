import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

import './MyProfileEdit.css'

class MyProfileEdit extends Component {
    state = {
        ...this.props.profile
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputClearer = () => {
        this.setState({
            classintro: this.props.classintro,
            country_id: this.props.country_id,
            state_id: this.props.state_id,
            address: this.props.address,
            city: this.props.city,
            pincode: this.props.pincode,
            bannerimgurl: this.props.bannerimgurl
        })
        this.props.showeditboxhandler()
    }

    submitHandler = () => {
        this.props.submithandler(this.state.classintro, this.state.country_id, this.state.state_id, this.state.address, this.state.city, this.state.pincode, this.state.bannerimgurl)
        this.inputClearer()
    }

    render() {
        return (
            <div className="container">
                <div className="row shadow p-3 mb-5 bg-white rounded" id="editmyinfo">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} className="inputfield">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="country_id"
                                    value={this.state.country_id}
                                    onChange={this.inputChangeHandler}>
                                    <option value="1">Please Select</option>
                                    <option value="2">India</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} className="inputfield">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="state_id"
                                    value={this.state.state_id}
                                    onChange={this.inputChangeHandler}>
                                    <option value="1">Please Select</option>
                                    <option value="2">Andhra Pradesh</option>
                                    <option value="3">Andaman and Nicobar Islands</option>
                                    <option value="4">Arunachal Pradesh</option>
                                    <option value="5">Assam</option>
                                    <option value="6">Bihar</option>
                                    <option value="7">Chandigarh</option>
                                    <option value="8">Chhattisgarh</option>
                                    <option value="9">Dadar and Nagar Haveli</option>
                                    <option value="10">Daman and Diu</option>
                                    <option value="11">Delhi</option>
                                    <option value="12">Lakshadweep</option>
                                    <option value="13">Puducherry</option>
                                    <option value="14">Goa</option>
                                    <option value="15">Gujarat</option>
                                    <option value="16">Haryana</option>
                                    <option value="17">Himachal Pradesh</option>
                                    <option value="18">Jammu and Kashmir</option>
                                    <option value="19">Jharkhand</option>
                                    <option value="20">Karnataka</option>
                                    <option value="21">Kerala</option>
                                    <option value="22">Madhya Pradesh</option>
                                    <option value="23">Maharashtra</option>
                                    <option value="24">Manipur</option>
                                    <option value="25">Meghalaya</option>
                                    <option value="26">Mizoram</option>
                                    <option value="27">Nagaland</option>
                                    <option value="28">Odisha</option>
                                    <option value="29">Punjab</option>
                                    <option value="30">Rajasthan</option>
                                    <option value="31">Sikkim</option>
                                    <option value="32">Tamil Nadu</option>
                                    <option value="33">Telangana</option>
                                    <option value="34">Tripura</option>
                                    <option value="35">Uttar Pradesh</option>
                                    <option value="36">Uttarakhand</option>
                                    <option value="37">West Bengal</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} className="inputfield">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Group as={Col} className="inputfield">
                                <Form.Label>Pin Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="pincode"
                                    value={this.state.pincode}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group as={Row} className="inputfield">
                            <Form.Label column sm={4}>Address</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="inputfield">
                            <Form.Label>Class Intro</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                name="classintro"
                                value={this.state.classintro}
                                onChange={this.inputChangeHandler} />
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={4}>Banner Image</Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="file"
                                    name="bannerimgurl"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Button
                            variant="outline-dark"
                            onClick={this.inputClearer}>
                            Discard
                        </Button>

                        <Button
                            className="float-right"
                            variant="outline-dark"
                            onClick={this.submitHandler}>
                            Save
                        </Button>
                    </Form>
                </div>
            </div >
        )
    }
}

export default MyProfileEdit;
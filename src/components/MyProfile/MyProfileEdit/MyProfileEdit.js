import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

import './MyProfileEdit.css'

const MyProfileEdit = (props) => (
    <section >
        <div className="container" >
            <div className="row shadow p-3 mb-5 bg-white rounded" id="editmyinfo">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                id="noborder"
                                as="select"
                                name="country_id"
                                value={props.profile.country_id}
                                onChange={props.inputchangehandler}>
                                <option value="1">India</option>
                                <option value="2">Please Select</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} >
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                id="noborder"
                                as="select"
                                name="state_id"
                                value={props.profile.state_id}
                                onChange={props.inputchangehandler}>
                                <option value="2">Please Select</option>
                                <option value={22}>Andhra Pradesh</option>
                                <option value={2}>Andaman and Nicobar Islands</option>
                                <option value={3}>Arunachal Pradesh</option>
                                <option value={4}>Assam</option>
                                <option value={5}>Bihar</option>
                                <option value={6}>Chandigarh</option>
                                <option value={7}>Chhattisgarh</option>
                                <option value={8}>Dadar and Nagar Haveli</option>
                                <option value={9}>Daman and Diu</option>
                                <option value={10}>Delhi</option>
                                <option value={11}>Lakshadweep</option>
                                <option value={12}>Puducherry</option>
                                <option value={13}>Goa</option>
                                <option value={14}>Gujarat</option>
                                <option value={15}>Haryana</option>
                                <option value={16}>Himachal Pradesh</option>
                                <option value={17}>Jammu and Kashmir</option>
                                <option value={18}>Jharkhand</option>
                                <option value={19}>Karnataka</option>
                                <option value={20}>Kerala</option>
                                <option value={21}>Madhya Pradesh</option>
                                <option value="1">Maharashtra</option>
                                <option value={23}>Manipur</option>
                                <option value={24}>Meghalaya</option>
                                <option value={25}>Mizoram</option>
                                <option value={26}>Nagaland</option>
                                <option value={27}>Odisha</option>
                                <option value={28}>Punjab</option>
                                <option value={29}>Rajasthan</option>
                                <option value={30}>Sikkim</option>
                                <option value={31}>Tamil Nadu</option>
                                <option value={32}>Telangana</option>
                                <option value={33}>Tripura</option>
                                <option value={34}>Uttar Pradesh</option>
                                <option value={35}>Uttarakhand</option>
                                <option value={36}>West Bengal</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="city"
                                value={props.profile.city}
                                onChange={props.inputchangehandler} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="pincode"
                                value={props.profile.pincode}
                                onChange={props.inputchangehandler} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>Address</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="address"
                                value={props.profile.address}
                                onChange={props.inputchangehandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Class Intro</Form.Label>
                        <Form.Control
                            id="noborder"
                            as="textarea"
                            rows="4"
                            name="classintro"
                            value={props.profile.classintro}
                            onChange={props.inputchangehandler} />
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>Banner Image</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="file"
                                name="bannerimgurl"
                                onChange={props.inputchangehandler} />
                        </Col>
                    </Form.Group>

                    <Button
                        variant="outline-dark"
                    // onClick={props.submithandler}
                    >
                        Discard
                    </Button>

                    <Button
                        id="editmyinfobutton"
                        variant="outline-dark"
                        onClick={props.submithandler}>
                        Save
                    </Button>
                </Form>
            </div>
        </div >
    </section>
)

export default MyProfileEdit;
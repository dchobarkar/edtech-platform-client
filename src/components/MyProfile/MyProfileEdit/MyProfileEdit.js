import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

import './MyProfileEdit.css'

const MyProfileEdit = (props) => (

    <section >
        <div className="container" >
            <div className="row shadow p-3 mb-5 bg-white rounded" id="editmyinfo">
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={4} >Tution's Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="tutionsname"
                                value={props.info.tutionsname}
                                onChange={props.changed} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>Tutor's Name</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="tutorsname"
                                value={props.info.tutorsname}
                                onChange={props.changed} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>Mobile No.</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                id="noborder"
                                type="number"
                                name="mobileno"
                                value={props.info.mobileno}
                                onChange={props.changed} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>Address</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="address"
                                value={props.info.address}
                                onChange={props.changed} />
                        </Col>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                id="noborder"
                                as="select"
                                name="state"
                                value={props.info.state}
                                onChange={props.changed}>
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

                        <Form.Group as={Col} >
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                id="noborder"
                                type="text"
                                name="city"
                                value={props.info.city}
                                onChange={props.changed} />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                id="noborder"
                                type="number"
                                name="pincode"
                                value={props.info.pincode}
                                onChange={props.changed} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group >
                        <Form.Label>Welcome Note</Form.Label>
                        <Form.Control
                            id="noborder"
                            as="textarea"
                            rows="4"
                            name="tutionwelcomenote"
                            value={props.info.tutionwelcomenote}
                            onChange={props.changed} />
                    </Form.Group>

                    <Form.Group as={Row} >
                        <Form.Label column sm={4}>Banner Image</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="file"
                                name="bannerimage"
                                onChange={props.changed} />
                        </Col>
                    </Form.Group>

                    <Button
                        variant="outline-dark"
                        onClick={props.saver}>
                        Save
                    </Button>
                </Form>
            </div>
        </div >
    </section>

)

export default MyProfileEdit;
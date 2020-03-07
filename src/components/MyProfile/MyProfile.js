import React from 'react';
import { Table, Button, Form, Col } from 'react-bootstrap';
import './MyProfile.css';

const MyProfile = () => (
    <div id="myprofile">
        <section id="myinfo">
            <div className="container">
                <div className="row align-items-center">
                    <div id="tutionsname">
                        <h4>Tution's Name</h4>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3" id="tutionimage">
                        <img alt="Tution's banner" src="https://scontent.fnag1-1.fna.fbcdn.net/v/t1.0-9/77067159_1193340290876690_4502540149132886016_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=NXNR2KrGBQ4AX_hWwTb&_nc_ht=scontent.fnag1-1.fna&oh=8a558ad996f01280ff710ff40c4f2206&oe=5E9427B0"></img>
                    </div>
                    <div className="col-9 justify-content-center align-items-center" id="tutioninfotable">
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Tutor's Name</td>
                                    <td>: Name</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>: dchobarkar@gmail.com</td>
                                </tr>
                                <tr>
                                    <td>Mobile No.</td>
                                    <td>: 9421333333</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>: Address</td>
                                </tr>
                            </tbody>
                        </Table>

                        <div id="tutionwelcomenote">
                            <h6>Welcome Note</h6>
                            <p>
                                Lorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.

                            </p>
                        </div>
                        <Button type="submit" id="editbutton">
                            Edit
                        </Button>
                    </div>
                </div>

            </div>
        </section>

        <section id="editmyinfo">
            <div className="container">
                <div className="row">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Name"
                                    name="name"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="surname">
                                <Form.Label>Surname</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Surname"
                                    name="surname"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Tution's Email"
                                    name="email"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="mobileno">
                                <Form.Label>Mobile No.</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Mobile No."
                                    name="mobileno"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="tutionname">
                            <Form.Label>Tution Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="xyz coaching classes"
                                name="tutionname"
                            />
                        </Form.Group>

                        <Form.Group controlId="address">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apartment, studio, or floor"
                                name="address"
                            />
                        </Form.Group>


                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    as="select"
                                    value="Choose..."
                                    name="state"
                                >
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="City"
                                    name="city"
                                />
                            </Form.Group>


                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Zip Code"
                                    name="zip"
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="welcomenote">
                            <Form.Label>Welcome Note</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows="4"
                                placeholder="Welcome Note"
                                name="welcomenote"
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit">
                            Save
                        </Button>


                    </Form>
                </div>
            </div >
        </section>

    </div>
)

export default MyProfile;
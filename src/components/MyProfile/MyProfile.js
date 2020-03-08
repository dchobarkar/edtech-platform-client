import React, { Component } from 'react';
import { Image, Table, Button, Form, Col, Row } from 'react-bootstrap';

import './MyProfile.css';

class MyProfile extends Component {
    state = {
        tutionsname: 'Chobarkar Coaching Classes',
        tutorsname: 'Darshan Chobarkar',
        email: 'dchobarkar@gmail.com',
        mobileno: '9404168827',
        address: 'Sudarshan, Dinadayal Conlony',
        city: 'Ambajogai',
        bannerimage: 'https://scontent.fnag1-1.fna.fbcdn.net/v/t1.0-9/77067159_1193340290876690_4502540149132886016_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=NXNR2KrGBQ4AX_hWwTb&_nc_ht=scontent.fnag1-1.fna&oh=8a558ad996f01280ff710ff40c4f2206&oe=5E9427B0',
        tutionwelcomenote: 'Lorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.',
        showeditbox: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    infoSaveHandler = () => {
        this.setState({
            showeditbox: !this.state.showeditbox
        })
        console.log(this.state)
    }

    editBoxHandler = () => {
        this.setState({
            showeditbox: !this.state.showeditbox
        })
    }

    myInfoEditBox = () => (
        <section >
            <div className="container" >
                <div className="row shadow p-3 mb-5 bg-white rounded" id="editmyinfo">
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={4} >
                                Tution's Name
                                    </Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    value={this.state.tutionsname}
                                    name="tutionsname"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={4}>
                                Tutor's Name
                                    </Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    value={this.state.tutorsname}
                                    name="tutorsname"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={4}>
                                Mobile No.
                                    </Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    id="noborder"
                                    type="number"
                                    value={this.state.mobileno}
                                    name="mobileno"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={4}>
                                Address
                                    </Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    value={this.state.address}
                                    name="address"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} >
                                <Form.Label>State</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    as="select"
                                    value={this.state.state}
                                    name="state"
                                    onChange={this.inputChangeHandler}
                                >
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
                                    value={this.state.city}
                                    name="city"
                                    onChange={this.inputChangeHandler}
                                />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Pin Code</Form.Label>
                                <Form.Control
                                    id="noborder"
                                    type="number"
                                    value={this.state.pincode}
                                    name="pincode"
                                    onChange={this.inputChangeHandler}
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group >
                            <Form.Label>Welcome Note</Form.Label>
                            <Form.Control
                                id="noborder"
                                as="textarea"
                                rows="4"
                                value={this.state.tutionwelcomenote}
                                name="tutionwelcomenote"
                                onChange={this.inputChangeHandler}
                            />
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={4}>
                                Banner Image
                                    </Form.Label>
                            <Col sm={8}>
                                <Form.Control
                                    type="file"
                                    name="bannerimage"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Button
                            variant="outline-dark"
                            onClick={this.infoSaveHandler}
                        >Save
                        </Button>
                    </Form>
                </div>
            </div >
        </section>
    )


    render() {
        return (
            <div className="fullscreen">
                <section id="myinfo">
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="shadow p-3 mb-5 bg-white rounded" id="tutionsname">
                                <h4>{this.state.tutionsname}</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3" id="tutionimage">
                                <Image alt="Tution's banner" src={this.state.bannerimage} roundedCircle />
                            </div>

                            <div className="col-9" id="tutioninfotable">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Tutor's Name</td>
                                            <td>: {this.state.tutorsname}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>: {this.state.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile No.</td>
                                            <td>: {this.state.mobileno}</td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td>: {this.state.address}, {this.state.city}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            <div id="tutionwelcomenote">
                                <h6>Welcome Note</h6>
                                <p align="justify">
                                    {this.state.tutionwelcomenote}
                                </p>
                            </div>

                            <div id="myprofileeditbtn">
                                <Button
                                    className="float-right"
                                    variant="outline-dark"
                                    onClick={this.editBoxHandler}
                                >Edit
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>

                {this.state.showeditbox ? <this.myInfoEditBox /> : null}
            </div >
        )
    }
}

export default MyProfile;
import React, { Component } from 'react';
import { Image, Table, Button } from 'react-bootstrap';
import axios from '../../axios-server';

import MyProfileEdit from './MyProfileEdit/MyProfileEdit';

import './MyProfile.css';

class MyProfile extends Component {
    state = {
        firstname: null,
        lastname: null,
        classname: null,
        mobile: null,
        email: null,
        country_id: null,
        state_id: null,
        address: null,
        city: null,
        pincode: null,
        bannerimgurl: null,
        classintro: null,
        showeditbox: false
    }

    componentDidMount() {
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }

        axios.get('/tuser/profile', config)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    firstname: response.data.userentity.firstname,
                    lastname: response.data.userentity.lastname,
                    classname: response.data.userentity.classname,
                    classintro: response.data.classintro,
                    mobile: response.data.userentity.mobile,
                    email: response.data.userentity.email,
                    country_id: response.data.countryentityCountryId,
                    state_id: response.data.stateentityStateId,
                    address: response.data.address,
                    city: response.data.city,
                    pincode: response.data.pincode,
                    bannerimgurl: response.data.bannerimgurl
                })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = () => {
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }

        const profile = {
            classintro: this.state.classintro,
            country_id: this.state.country_id,
            state_id: this.state.state_id,
            address: this.state.address,
            city: this.state.city,
            pincode: this.state.pincode,
            bannerimgurl: this.state.bannerimgurl
        }

        axios.patch('/tuser/update', profile, config)
            .then(response => { })
            .catch(error => {
                alert(error.message)
            })

        this.showEditBoxHandler()
    }

    showEditBoxHandler = () => {
        this.setState({
            showeditbox: !this.state.showeditbox
        })
    }

    render() {
        return (
            <div className="fullscreen">
                <section id="myinfo">
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="shadow p-3 mb-5 bg-white rounded" id="tutionsname">
                                <h4>{this.state.classname}</h4>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-3" id="tutionimage">
                                <Image alt={this.state.classname} src={this.state.bannerimgurl} roundedCircle />
                            </div>

                            <div className="col-9" id="tutioninfotable">
                                <Table>
                                    <tbody>
                                        <tr>
                                            <td>Name</td>
                                            <td>: {this.state.firstname} {this.state.lastname}</td>
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td>: {this.state.email}</td>
                                        </tr>
                                        <tr>
                                            <td>Mobile No.</td>
                                            <td>: {this.state.mobile}</td>
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
                                    {this.state.classintro}
                                </p>
                            </div>

                            <div id="myprofileeditbtn">
                                <Button
                                    className="float-right"
                                    variant="outline-dark"
                                    onClick={this.showEditBoxHandler}>
                                    Edit
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>

                {this.state.showeditbox ?
                    <MyProfileEdit
                        inputchangehandler={this.inputChangeHandler}
                        submithandler={this.submitHandler}
                        profile={this.state} /> : null}
            </div >
        )
    }
}

export default MyProfile;
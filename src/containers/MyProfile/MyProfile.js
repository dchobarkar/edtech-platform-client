import React, { Component } from 'react';
import { Image, Table, Button } from 'react-bootstrap';
import axios from '../../axios-server';

import LoadingSpinner from '../../components/Spinner/Spinner';
import DModal from '../../components/DModal/DModal';
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
        showeditbox: false,
        loading: false,
        error: false,
        errormsg: null
    }

    componentDidMount() {
        this.setState({ loading: true })
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
                    bannerimgurl: response.data.bannerimgurl,
                    loading: false
                })
            })
            .catch(error => {
                this.setState({ error: true, loading: false, errormsg: error.response.data.message })
            })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }
    showEditBoxHandler = () => {
        this.setState({
            showeditbox: !this.state.showeditbox
        })
    }

    submitHandler = (classintro, country_id, state_id, address, city, pincode, bannerimgurl) => {
        this.setState({ loading: true })
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }
        const profile = {
            classintro: classintro,
            country_id: country_id,
            state_id: state_id,
            address: address,
            city: city,
            pincode: pincode,
            bannerimgurl: bannerimgurl
        }
        axios.patch('/tuser/update', profile, config)
            .then(response => {
                this.setState({
                    classintro: response.data.classintro,
                    country_id: response.data.countryentityCountryId,
                    state_id: response.data.stateentityStateId,
                    address: response.data.address,
                    city: response.data.city,
                    pincode: response.data.pincode,
                    bannerimgurl: response.data.bannerimgurl,
                    loading: false
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    }

    render() {
        let profile =
            <>
                <div className="row align-items-center">
                    <div className="shadow p-3 mb-5 bg-white rounded" id="tutionsname">
                        <h4>{this.state.classname}</h4>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-3" id="tutionimage">
                        <Image alt={this.state.classname} src={this.state.bannerimgurl} roundedCircle />
                    </div>

                    <div className="col-sm-9" id="tutioninfotable">
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
                        <p>{this.state.classintro}</p>
                    </div>

                    {this.state.showeditbox ? null :
                        <div id="myprofileeditbtn">
                            <Button
                                className="float-right"
                                variant="outline-dark"
                                onClick={this.showEditBoxHandler}>
                                Edit
                        </Button>
                        </div>}
                </div>
            </>

        if (this.state.loading) {
            profile = <LoadingSpinner />
        }

        return (
            <div className="fullscreen">
                <section id="myinfo">
                    <div className="container" >

                        {profile}

                        {this.state.error ?
                            <DModal show={this.state.error}
                                modalhandler={this.errorModalHandler}>
                                {Array.isArray(this.state.errormsg) ?
                                    <>
                                        {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                                    </>
                                    : < p > {this.state.errormsg}</p>}
                            </DModal> : null}
                    </div>
                </section>

                {this.state.showeditbox ?
                    <MyProfileEdit
                        profile={this.state}
                        showeditboxhandler={this.showEditBoxHandler}
                        submithandler={this.submitHandler} /> : null}
            </div >
        )
    }
}

export default MyProfile;
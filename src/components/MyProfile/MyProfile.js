import React, { Component } from 'react';
import { Image, Table, Button } from 'react-bootstrap';

import axios from '../../axios-server';

import MyProfileEdit from './MyProfileEdit/MyProfileEdit';

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
        const myprofile = {
            ...this.state
        }
        axios.post('/myprofile.json', myprofile)
            .then(response => console.log(response))
            .catch(error => console.log(error))
        this.setState({
            showeditbox: !this.state.showeditbox
        })
    }

    editBoxHandler = () => {
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

                {this.state.showeditbox ?
                    <MyProfileEdit
                        changed={this.inputChangeHandler}
                        saver={this.infoSaveHandler}
                        info={this.state}
                    /> : null}
            </div >
        )
    }
}

export default MyProfile;
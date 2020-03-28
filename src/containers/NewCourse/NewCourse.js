import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';

import './NewCourse.css';

class NewCourse extends Component {
    state = {}

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    newCourseAdder = () => {
        const newcourse = {
            ...this.state
        }
        console.log(newcourse)
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }
        axios.post('course', newcourse, config)
    }

    render() {
        return (
            <div className="fullscreen">
                <div className="container" id="newcoursesetup">
                    <h4>New Course Setup</h4>

                    <Form className="shadow p-3 mb-5 bg-white rounded">
                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>Course Title</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    placeholder="Title"
                                    name="coursetitle"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>Target Audience</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="select"
                                    name="targetaudience_id"
                                    onChange={this.inputChangeHandler}>
                                    <option value={1}>8th</option>
                                    <option value={2}>9th</option>
                                    <option value={3}>10th</option>
                                    <option value={4}>11th - PCB</option>
                                    <option value={5}>11th - PCM</option>
                                    <option value={6}>11th - PCMB</option>
                                    <option value={7}>12th - PCB</option>
                                    <option value={8}>12th - PCM</option>
                                    <option value={9}>12th - PCMB</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>Subject</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="select"
                                    name="subject_id"
                                    onChange={this.inputChangeHandler}>
                                    <option value={1}>English</option>
                                    <option value={2}>Physics</option>
                                    <option value={3}>Biology</option>
                                    <option value={4}>Chemistry</option>
                                    <option value={5}>Mathematics</option>
                                    <option value={6}>Science</option>
                                    <option value={7}>Marathi</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>Course Fee</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="number"
                                    placeholder="Course Fee"
                                    name="fee"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Course Introduction</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="textarea"
                                    rows="5"
                                    placeholder="Course Introduction"
                                    name="courseintro"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                {/* <Link to="/coursecontent"> */}
                                <Button
                                    onClick={this.newCourseAdder}
                                    className="float-right"
                                    variant="outline-dark">
                                    Add Course
                                    </Button>
                                {/* </Link> */}
                            </Col>
                        </Form.Group>

                    </Form>
                </div>
            </div>
        )
    }
}

export default NewCourse;
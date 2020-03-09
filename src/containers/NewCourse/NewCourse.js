import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NewCourse.css';

class NewCourse extends Component {
    state = {
        coursename: '',
        targetaudience: '',
        subject: '',
        introduction: ''
    }

    courseSetUpHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    newCourseAdder = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="fullscreen">
                <div className="container" id="newcoursesetup">
                    <h4>New Course Setup</h4>
                    <Form className="shadow p-3 mb-5 bg-white rounded">
                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Course Title
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    placeholder="Title"
                                    name="coursename"
                                    onChange={this.courseSetUpHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Target Audience
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="select"
                                    name="targetaudience"
                                    defaultVaule="8th"
                                    onChange={this.courseSetUpHandler}
                                >
                                    <option value="8th">8th</option>
                                    <option value="9th">9th</option>
                                    <option value="10th">10th</option>
                                    <option value="11thpcb">11th - PCB</option>
                                    <option value="11thpcm">11th - PCM</option>
                                    <option value="11thpcmb">11th - PCMB</option>
                                    <option value="12thpcb">12th - PCB</option>
                                    <option value="12pcm">12th - PCM</option>
                                    <option value="12thpcmb">12th - PCMB</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Subject
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    placeholder="Subject"
                                    name="subject"
                                    onChange={this.courseSetUpHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Course Introduction
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="textarea"
                                    rows="5"
                                    placeholder="Introduction"
                                    name="introduction"
                                    onChange={this.courseSetUpHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Link to="/coursecontent">
                                    <Button
                                        onClick={this.newCourseAdder}
                                        className="float-right"
                                        variant="outline-dark"
                                    >Add Course
                                    </Button>
                                </Link>
                            </Col>
                        </Form.Group>

                    </Form>
                </div>
            </div>
        )
    }
}

export default NewCourse;
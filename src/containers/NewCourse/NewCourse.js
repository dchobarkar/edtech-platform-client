import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NewCourse.css';

class NewCourse extends Component {
    render() {
        return (
            <div className="container">
                <h4>New Course Setup</h4>
                <Form className="shadow p-3 mb-5 bg-white rounded">
                    <Form.Group as={Row} controlId="examtitle">
                        <Form.Label column sm={2}>
                            Course Title
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                name="title"
                                onChange={this.testinitialsHandler} />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row} controlId="targetaudience">
                        <Form.Label column sm={2}>
                            Target Audience
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="select"
                                name="targetaudience"
                                onChange={this.testinitialsHandler}
                            >
                                <option selected>8th</option>
                                <option>9th</option>
                                <option>10th</option>
                                <option>11th - PCB</option>
                                <option>11th - PCM</option>
                                <option>11th - PCMB</option>
                                <option>12th - PCB</option>
                                <option>12th - PCM</option>
                                <option>12th - PCMB</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="examtitle">
                        <Form.Label column sm={2}>
                            Subject
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                type="text"
                                placeholder="Subject"
                                name="title"
                                onChange={this.testinitialsHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="examinstructions">
                        <Form.Label column sm={2}>
                            Course Introduction
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                placeholder="Instructions"
                                name="instructions"
                                onChange={this.testinitialsHandler} />
                        </Col>
                    </Form.Group>


                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Link to="/coursecontent">
                                <Button
                                    // onClick={() => this.props.testinitialsregister(this.state)}
                                    type="submit"
                                    value="submit">
                                    Add Course
                                </Button>
                            </Link>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default NewCourse;
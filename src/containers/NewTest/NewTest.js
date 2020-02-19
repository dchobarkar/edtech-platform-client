import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import './NewTest.css';

class NewTest extends Component {
    render() {
        return (
            <div className="container">
                <h4>New Test Setup</h4>
                <Form className="shadow p-3 mb-5 bg-white rounded">
                    <Form.Group as={Row} controlId="examtitle">
                        <Form.Label column sm={2}>
                            Title for the Exam
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Title" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="examinstructions">
                        <Form.Label column sm={2}>
                            Instructions
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows="5" placeholder="Instructions" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="targetaudience">
                        <Form.Label column sm={2}>
                            Target Audience
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="select">
                                <option>11th - PCB</option>
                                <option>11th - PCM</option>
                                <option>12th - PCB</option>
                                <option>12th - PCM</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Button type="submit">Create Test</Button>
                        </Col>
                    </Form.Group>
                </Form>


                <Form className="shadow p-3 mb-5 bg-white rounded">
                    <Form.Group as={Row} controlId="question">
                        <Form.Label column sm={2}>
                            Question
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control as="textarea" rows="2" placeholder="Question" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="questionimage">
                        <Form.Label column sm={2}>
                            Figure
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="file" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="opt1">
                        <Form.Label column sm={2}>
                            Option 1
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Option 1" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="opt2">
                        <Form.Label column sm={2}>
                            Option 2
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Option 2" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="opt3">
                        <Form.Label column sm={2}>
                            Option 3
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Option 3" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="opt4">
                        <Form.Label column sm={2}>
                            Option 4
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" placeholder="Option 4" />
                        </Col>
                    </Form.Group>

                    <Form.Row>

                        <Form.Group as={Col}>
                            <Col sm={{ span: 10, offset: 4 }}>
                                <Button type="submit">testid.previous</Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">testid.next</Button>
                            </Col>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default NewTest;
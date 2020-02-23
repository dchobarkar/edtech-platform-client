import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './NewTest.css';

class NewTest extends Component {
    state = {
        testinitials: [
            { title: '' },
            { instructions: '' },
            { targetaudience: '' }
        ]
    }

    testinitialshandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    testinitials = () => {
        alert(this.state.title + '+' + this.state.instructions + '+' + this.state.targetaudience)

    }


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
                            <Form.Control
                                type="text"
                                placeholder="Title"
                                name="title"
                                onChange={this.testinitialshandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="examinstructions">
                        <Form.Label column sm={2}>
                            Instructions
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="textarea"
                                rows="5"
                                placeholder="Instructions"
                                name="instructions"
                                onChange={this.testinitialshandler} />
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
                                onChange={this.testinitialshandler}
                            >
                                <option>11th - PCB</option>
                                <option>11th - PCM</option>
                                <option>12th - PCB</option>
                                <option>12th - PCM</option>
                            </Form.Control>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Col sm={{ span: 10, offset: 2 }}>
                            <Link to="/newquestion">
                                <Button
                                    onClick={this.testinitials}
                                    type="submit"
                                    value="submit"
                                >Create Test</Button>
                            </Link>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

export default NewTest;
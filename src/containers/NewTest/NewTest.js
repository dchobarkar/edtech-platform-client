import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/actionTypes'

import './NewTest.css';

class NewTest extends Component {
    state = {
        title: '',
        instructions: '',
        targetaudience: ''
    }

    testinitialsHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div className="container" id="fullscreen">
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
                                onChange={this.testinitialsHandler} />
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
                                    onClick={() => this.props.testinitialsregister(this.state)}
                                    type="submit"
                                    value="submit">
                                    Create Test
                                </Button>
                            </Link>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        testinitialsregister: (newtest) => dispatch({
            type: actions.TESTINITIALSREGISTER, value: { newtest }
        })
    }
}


export default connect(null, mapDispatchToProps)(NewTest);
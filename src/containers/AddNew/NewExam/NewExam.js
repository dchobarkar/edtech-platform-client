import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewExam extends Component {
    state = {

    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>Exam Title</p>
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>
                                    Test Title
                        </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="Exam Title"
                                        name="examname"
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>
                                    Instructions
                            </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        as="textarea"
                                        rows="2"
                                        placeholder="Instructions"
                                        name="instructions"
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Button
                                onClick={() => this.props.newexamsubmit(this.state.examname, this.state.instructions)}
                                className="float-right"
                                variant="outline-dark">Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewExam;
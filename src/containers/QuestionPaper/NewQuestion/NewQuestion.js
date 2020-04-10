import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

import './NewQuestion.css';

class NewQuestion extends Component {
    state = {
        show: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showInputBoxHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }

    newQuestionHandler = (e) => {
        this.props.newquestionhandler(e, this.state.que, this.state.opt1, this.state.opt2, this.state.opt3, this.state.opt4, this.state.answer, this.state.queimage);
        this.showInputBoxHandler();
    }

    render() {
        return (
            <div className="container" id="addnewquestion">
                <Button
                    id="addnewquestionbutton"
                    variant="outline-dark"
                    onClick={this.showInputBoxHandler}>
                    Add New Question
                </Button>

                {this.state.show ?
                    <div className="row">
                        <Form className="shadow p-2 bg-white rounded" onSubmit={(e) => this.newQuestionHandler(e)}>
                            <Form.Group className="inputfield">
                                <Form.Control
                                    required
                                    title="Please Enter a question."
                                    as="textarea"
                                    rows="2"
                                    placeholder="Question"
                                    name="que"
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Figure</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="file"
                                        name="queimage" />
                                </Col>
                            </Form.Group>

                            <Form.Row>
                                <Form.Group className="inputfield">
                                    <Col lg={6}>
                                        <Form.Control
                                            required
                                            title="Please enter the option."
                                            type="text"
                                            placeholder="Option 1"
                                            name="opt1"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="inputfield">
                                    <Col lg={6}>
                                        <Form.Control
                                            required
                                            title="Please enter the option."
                                            type="text"
                                            placeholder="Option 2"
                                            name="opt2"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group className="inputfield">
                                    <Col lg={6}>
                                        <Form.Control
                                            required
                                            title="Please enter the option."
                                            type="text"
                                            placeholder="Option 3"
                                            name="opt3"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="inputfield">
                                    <Col lg={6}>
                                        <Form.Control
                                            required
                                            title="Please enter the option."
                                            type="text"
                                            placeholder="Option 4"
                                            name="opt4"
                                            onChange={this.inputChangeHandler} />
                                    </Col>
                                </Form.Group>
                            </Form.Row>

                            <Form.Group className="inputfield">
                                <Col lg={6}>
                                    <Form.Label>Answer</Form.Label>
                                    <Form.Control
                                        required
                                        title="Please select the correct answer."
                                        as="select"
                                        name="answer"
                                        onChange={this.inputChangeHandler}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group>
                                <Button
                                    className="float-right"
                                    variant="outline-dark"
                                    type="submit">
                                    Add
                                </Button>
                            </Form.Group>
                        </Form>
                    </div > : null}
            </div>
        )
    }
}

export default NewQuestion;
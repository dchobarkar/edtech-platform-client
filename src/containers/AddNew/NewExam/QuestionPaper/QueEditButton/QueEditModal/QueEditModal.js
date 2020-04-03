import React, { Component } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

class QueEditModal extends Component {
    state = {
        que: this.props.que,
        opt1: this.props.opt1,
        opt2: this.props.opt2,
        opt3: this.props.opt3,
        opt4: this.props.opt4,
        answer: this.props.answer,
        queimage: this.props.queimage
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }

    updateQuestionHandler = () => {
        this.props.updatequestionhandler(this.props.queIndex, this.props.queid, this.state.que, this.state.opt1, this.state.opt2, this.state.opt3, this.state.opt4, this.state.answer, this.state.queimage);
        this.props.showeditmodal();
    }

    discardChangeHandler = () => {
        this.setState({
            que: this.props.que,
            opt1: this.props.opt1,
            opt2: this.props.opt2,
            opt3: this.props.opt3,
            opt4: this.props.opt4,
            answer: this.props.answer,
            queimage: this.props.queimage
        });
        this.props.showeditmodal();
    }

    render() {
        return (
            <Modal centered
                show={this.props.show}
                onHide={this.discardChangeHandler}>
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body >
                    <Form>
                        <Form.Group>
                            <Form.Control
                                id="noborder"
                                as="textarea"
                                rows="2"
                                name="que"
                                value={this.state.que}
                                onChange={this.inputChangeHandler} />
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Figure</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="file"
                                    name="queimage"
                                />
                            </Col>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group>
                                <Col lg={6}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="opt1"
                                        value={this.state.opt1}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group >
                                <Col lg={6}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="opt2"
                                        value={this.state.opt2}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group >
                                <Col lg={6}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="opt3"
                                        value={this.state.opt3}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group >
                                <Col lg={6}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="opt4"
                                        value={this.state.opt4}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group >
                            <Col lg={6}>
                                <Form.Label>Answer</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="answer"
                                    value={this.state.answer}
                                    onChange={this.inputChangeHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="outline-dark"
                        onClick={this.discardChangeHandler}>
                        Discard Changes
                    </Button>

                    <Button
                        variant="outline-dark"
                        onClick={this.updateQuestionHandler}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        )
    }
}

export default QueEditModal;
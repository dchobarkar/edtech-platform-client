import React, { Component } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

class QueEditModal extends Component {
    state = {
        que: this.props.que,
        opt1: this.props.opt1,
        opt2: this.props.opt2,
        opt3: this.props.opt3,
        opt4: this.props.opt4
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    saveEditHandler = () => {
        this.props.editquestion(this.props.index, this.state.que, this.state.opt1, this.state.opt2, this.state.opt3, this.state.opt4);
        this.props.showeditmodal();
    }

    discardChangeHandler = () => {
        this.setState({
            que: this.props.que,
            opt1: this.props.opt1,
            opt2: this.props.opt2,
            opt3: this.props.opt3,
            opt4: this.props.opt4
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
                                    name="fig"
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
                        onClick={this.saveEditHandler}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        )
    }
}

export default QueEditModal;
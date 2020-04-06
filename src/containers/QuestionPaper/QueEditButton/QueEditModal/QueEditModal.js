import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';

import DModal from '../../../../components/DModal/DModal';

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
            <DModal
                show={this.props.show}
                modalhandler={this.discardChangeHandler}>

                <Form>
                    <Form.Group className="inputfield">
                        <Form.Control
                            as="textarea"
                            rows="2"
                            name="que"
                            value={this.state.que}
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
                                    type="text"
                                    name="opt1"
                                    value={this.state.opt1}
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="inputfield">
                            <Col lg={6}>
                                <Form.Control
                                    type="text"
                                    name="opt2"
                                    value={this.state.opt2}
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="inputfield">
                            <Col lg={6}>
                                <Form.Control
                                    type="text"
                                    name="opt3"
                                    value={this.state.opt3}
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group className="inputfield">
                            <Col lg={6}>
                                <Form.Control
                                    type="text"
                                    name="opt4"
                                    value={this.state.opt4}
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group className="inputfield">
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

                <Button
                    variant="outline-dark"
                    onClick={this.discardChangeHandler}>
                    Discard Changes
                    </Button>

                <Button
                    className="float-right"
                    variant="outline-dark"
                    onClick={this.updateQuestionHandler}>
                    Save
                </Button>
            </DModal >
        )
    }
}

export default QueEditModal;
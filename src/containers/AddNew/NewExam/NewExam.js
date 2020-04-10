import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewExam extends Component {
    state = {
        examtitle: '',
        examinstruction: '',
        duration: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    newExamHandler = (e) => {
        this.props.newexamhandler(e, this.props.sectionid, this.state.examtitle, this.state.examinstruction, this.state.duration);
        this.setState({
            examtitle: '',
            examinstruction: '',
            duration: ''
        });
        this.props.closetab('Exam');
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>{this.state.examtitle}</p>
                        <Form onSubmit={(e) => this.newExamHandler(e)}>
                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Test Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        required
                                        title="Please enter a valid exam title."
                                        pattern="^[\w\s]{0,100}$"
                                        type="text"
                                        name="examtitle"
                                        value={this.state.examtitle}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Instructions</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        as="textarea"
                                        rows="2"
                                        name="examinstruction"
                                        value={this.state.examinstruction}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Duration</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        required
                                        title="Please enter the duration of exam."
                                        pattern="^[0-9]+$"
                                        type="number"
                                        name="duration"
                                        value={this.state.duration}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Button
                                className="float-right"
                                variant="outline-dark"
                                type="submit">
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewExam;
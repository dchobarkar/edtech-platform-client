import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewExam extends Component {
    state = {
        examname: '',
        instructions: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputClearer = () => {
        this.props.newexamsubmit(this.state.examname, this.state.instructions);
        this.setState({
            examname: '',
            instructions: ''
        });
        this.props.closetab('Exam')
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>{this.state.examname}</p>
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Test Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="examname"
                                        value={this.state.examname}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Instructions</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        as="textarea"
                                        rows="2"
                                        name="instructions"
                                        value={this.state.instructions}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Button
                                className="float-right"
                                variant="outline-dark"
                                onClick={this.inputClearer}>
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
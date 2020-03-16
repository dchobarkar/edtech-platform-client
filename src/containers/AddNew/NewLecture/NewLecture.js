import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewLecture extends Component {
    state = {
        lessonname: '',
        description: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    inputClearer = () => {
        this.props.newlessonsubmit(this.state.lessonname, this.state.description);
        this.setState({
            lessonname: '',
            description: ''
        });
        this.props.closetab('Lecture');
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>{this.state.lessonname}</p>
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Lecture Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="lessonname"
                                        value={this.state.lessonname}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Content</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        as="textarea"
                                        rows="2"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="lecturevideo">
                                <Form.Label column sm={2}>Video</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="file"
                                        name="video" />
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

export default NewLecture;
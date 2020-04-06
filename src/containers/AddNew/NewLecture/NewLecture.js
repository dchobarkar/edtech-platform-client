import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewLecture extends Component {
    state = {
        lecturetitle: '',
        lectureintro: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    newLectureHandler = () => {
        this.props.newlecturehandler(this.props.sectionid, this.state.lecturetitle, this.state.lectureintro, this.state.lecturevideo);
        this.setState({
            lecturetitle: '',
            lectureintro: ''
        });
        this.props.closetab('Lecture');
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>{this.state.lecturetitle}</p>
                        <Form>
                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Lecture Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="text"
                                        name="lecturetitle"
                                        value={this.state.lecturetitle}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Description</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        as="textarea"
                                        rows="2"
                                        name="lectureintro"
                                        value={this.state.lectureintro}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Video</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        type="file"
                                        name="lecturevideo" />
                                </Col>
                            </Form.Group>

                            <Button
                                className="float-right"
                                variant="outline-dark"
                                onClick={this.newLectureHandler}>
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
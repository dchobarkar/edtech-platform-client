import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

import './CourseInfo.css';

class CourseInfo extends Component {
    state = {
        coursename: this.props.coursename,
        targetaudience: this.props.targetaudience,
        subject: this.props.subject,
        introduction: this.props.introduction,
        show: false,
        edit: true
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showInfoHandler = () => {
        this.setState({
            show: !this.state.show,
            edit: true
        })
    }
    editInfoHandler = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    saveCourseDetailsHandler = () => {
        this.props.editinfo(this.state.coursename, this.state.targetaudience, this.state.subject, this.state.introduction);
        this.showInfoHandler();
    }

    discardChangeHandler = () => {
        this.setState({
            coursename: this.props.coursename,
            targetaudience: this.props.targetaudience,
            subject: this.props.subject,
            introduction: this.props.introduction,
            show: !this.state.show,
            edit: !this.state.edit
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant="light"
                    onClick={this.showInfoHandler}>
                    <i className="fas fa-info-circle"></i>
                    Course Description
                </Button>

                {this.state.show ?
                    <div id="courseinfobox">
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Course Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.edit}
                                        id="noborder"
                                        type="text"
                                        name="coursename"
                                        value={this.state.coursename}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Target Audience</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.edit}
                                        id="noborder"
                                        as="select"
                                        name="targetaudience"
                                        value={this.state.targetaudience}
                                        onChange={this.inputChangeHandler}>
                                        <option value="8th">8th</option>
                                        <option value="9th">9th</option>
                                        <option value="10th">10th</option>
                                        <option value="11thpcb">11th - PCB</option>
                                        <option value="11thpcm">11th - PCM</option>
                                        <option value="11thpcmb">11th - PCMB</option>
                                        <option value="12thpcb">12th - PCB</option>
                                        <option value="12pcm">12th - PCM</option>
                                        <option value="12thpcmb">12th - PCMB</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Subject</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.edit}
                                        id="noborder"
                                        type="text"
                                        name="subject"
                                        value={this.state.subject}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Course Introduction</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.edit}
                                        id="noborder"
                                        as="textarea"
                                        rows="5"
                                        name="introduction"
                                        value={this.state.introduction}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>
                        </Form>
                        <div id="courseinfoeditbutton" >
                            {this.state.edit ?
                                <Button
                                    variant="light"
                                    onClick={this.editInfoHandler}>
                                    <i className="far fa-edit"></i>
                                    Edit
                                </Button> : null}

                            {this.state.edit ?
                                null : <div>
                                    <Button
                                        variant="light"
                                        onClick={this.saveCourseDetailsHandler}>
                                        <i className="far fa-save"></i>
                                        Save
                                    </Button>

                                    <Button
                                        variant="light"
                                        onClick={this.discardChangeHandler}>
                                        Discard Changes
                                    </Button>
                                </div>}
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default CourseInfo;
import React, { Component } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';

import './CourseDetails.css';

class CourseInfo extends Component {
    state = {
        coursetitle: this.props.coursetitle,
        targetaudience_id: this.props.targetaudience_id,
        subject_id: this.props.subject_id,
        courseintro: this.props.courseintro,
        fee: this.props.fee,
        showcoursedetails: false,
        editcoursedetails: true
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showCourseDetailsHandler = () => {
        this.setState({
            showcoursedetails: !this.state.showcoursedetails,
            editcoursedetails: true,

        })
    }
    editCourseDetailsHandler = () => {
        this.setState({
            editcoursedetails: !this.state.editcoursedetails
        })
    }

    updateCourseHandler = () => {
        this.props.updatecoursehandler(this.state.coursetitle, this.state.targetaudience_id, this.state.subject_id, this.state.courseintro, this.state.fee);
        this.showCourseDetailsHandler();
    }

    discardChangeHandler = () => {
        this.setState({
            coursetitle: this.props.coursetitle,
            targetaudience_id: this.props.targetaudience_id,
            subject_id: this.props.subject_id,
            courseintro: this.props.courseintro,
            fee: this.state.fee,
            showcoursedetails: !this.state.showcoursedetails,
            editcoursedetails: !this.state.editcoursedetails
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant="light"
                    onClick={this.showCourseDetailsHandler}>
                    <i className="fas fa-info-circle"></i>
                    Course Description
                </Button>

                {this.state.showcoursedetails ?
                    <div id="courseinfobox">
                        <Form>
                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Course Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        id="noborder"
                                        type="text"
                                        name="coursetitle"
                                        value={this.state.coursetitle}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Target Audience</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        id="noborder"
                                        as="select"
                                        name="targetaudience_id"
                                        value={this.state.targetaudience_id}
                                        onChange={this.inputChangeHandler}>
                                        <option value="1">8th</option>
                                        <option value="2">9th</option>
                                        <option value="3">10th</option>
                                        <option value="4">11th - PCB</option>
                                        <option value="5">11th - PCM</option>
                                        <option value="6">11th - PCMB</option>
                                        <option value="7">12th - PCB</option>
                                        <option value="8">12th - PCM</option>
                                        <option value="9">12th - PCMB</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Subject</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        id="noborder"
                                        as="select"
                                        name="subject_id"
                                        value={this.state.subject_id}
                                        onChange={this.inputChangeHandler}>
                                        <option value="1">Physics</option>
                                        <option value="2">Chemistry</option>
                                        <option value="3">Mathematics</option>
                                        <option value="4">Biology</option>
                                        <option value="5">Electronics</option>
                                        <option value="6">English</option>
                                        <option value="7">Science</option>
                                        <option value="8">History</option>
                                        <option value="9">Civics</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} >
                                <Form.Label column sm={2}>Course Fee</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        id="noborder"
                                        type="number"
                                        name="fee"
                                        value={this.state.fee}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Course Introduction</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        id="noborder"
                                        as="textarea"
                                        rows="5"
                                        name="courseintro"
                                        value={this.state.courseintro}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>
                        </Form>

                        <div id="courseinfoeditbutton" >
                            {this.state.editcoursedetails ?
                                <Button
                                    variant="light"
                                    onClick={this.editCourseDetailsHandler}>
                                    <i className="far fa-edit"></i>
                                    Edit
                                </Button> : null}

                            {this.state.editcoursedetails ?
                                null : <div>
                                    <Button
                                        variant="light"
                                        onClick={this.updateCourseHandler}>
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
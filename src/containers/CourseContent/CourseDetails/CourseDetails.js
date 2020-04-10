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

    updateCourseHandler = (e) => {
        this.props.updatecoursehandler(e, this.state.coursetitle, this.state.targetaudience_id, this.state.subject_id, this.state.courseintro, this.state.fee);
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
                    <i className="fas fa-info-circle"></i> Course Description
                </Button>

                {this.state.showcoursedetails ?
                    <div id="courseinfobox">
                        <Form onSubmit={(e) => this.updateCourseHandler(e)}>
                            <Form.Group as={Row} className="inputfield" >
                                <Form.Label column sm={2}>Course Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        required
                                        pattern="^[\w\s]{0,100}$"
                                        title="Please Enter a Valid Course Title."
                                        type="text"
                                        name="coursetitle"
                                        value={this.state.coursetitle}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield" >
                                <Form.Label column sm={2}>Target Audience</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        required
                                        pattern="^[0-9]+$"
                                        title="Plese select option from given values."
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
                                        <option value="9">12th - PCMB</option>                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Subject</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        required
                                        pattern="^[0-9]+$"
                                        title="Plese select option from given values."
                                        id="noborder"
                                        as="select"
                                        name="subject_id"
                                        value={this.state.subject_id}
                                        onChange={this.inputChangeHandler}>
                                        <option value="1">English</option>
                                        <option value="2">Physics</option>
                                        <option value="3">Physics - I</option>
                                        <option value="4">Physics - II</option>
                                        <option value="5">Biology</option>
                                        <option value="6">Biology - I</option>
                                        <option value="7">Biology - II</option>
                                        <option value="8">Chemistry</option>
                                        <option value="9">Chemistry - I</option>
                                        <option value="10">Chemistry - II</option>
                                        <option value="11">Mathematics</option>
                                        <option value="12">Mathematics - I</option>
                                        <option value="13">Mathematics - II</option>
                                        <option value="14">Science</option>
                                        <option value="15">Science - I</option>
                                        <option value="16">Science - II</option>
                                        <option value="17">Marathi</option>
                                        <option value="18">History</option>
                                        <option value="19">Geography</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Course Fee</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        required
                                        pattern="^[0-9]+$"
                                        type="number"
                                        name="fee"
                                        value={this.state.fee}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Course Introduction</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        disabled={this.state.editcoursedetails}
                                        as="textarea"
                                        rows="5"
                                        name="courseintro"
                                        value={this.state.courseintro}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <div id="courseinfoeditbutton" >
                                {this.state.editcoursedetails ?
                                    <Button
                                        variant="light"
                                        onClick={this.editCourseDetailsHandler}>
                                        <i className="far fa-edit"></i> Edit
                                </Button> : null}

                                {this.state.editcoursedetails ?
                                    null : <div>
                                        <Button
                                            variant="light"
                                            type="submit">
                                            <i className="far fa-save"></i> Save
                                    </Button>

                                        <Button
                                            variant="light"
                                            onClick={this.discardChangeHandler}>
                                            Discard Changes
                                    </Button>
                                    </div>}
                            </div>
                        </Form>

                    </div> : null}
            </div>
        )
    }
}

export default CourseInfo;
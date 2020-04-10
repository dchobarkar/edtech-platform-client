import React, { Component } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import axios from '../../axios-server';

import LoadingSpinner from '../../components/Spinner/Spinner';
import DModal from '../../components/DModal/DModal';

import './NewCourse.css';

class NewCourse extends Component {
    state = {
        coursetitle: '',
        targetaudience_id: "1",
        subject_id: "1",
        fee: null,
        courseintro: '',
        loading: false,
        error: false,
        errormsg: null
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }

    newCourseHandler = (e) => {
        e.preventDefault();
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }
        const newCourse = {
            ...this.state
        }
        axios.post('course', newCourse, config)
            .then(response => {
                this.props.history.push('/coursecontent/' + response.data.course_id)
                console.log(this.state)
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    }

    render() {
        let newcourseform =
            <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={(e) => this.newCourseHandler(e)}>
                <Form.Group as={Row} className="inputfield">
                    <Form.Label column sm={2}>Course Title</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            required
                            pattern="^[\w\s]{0,100}$"
                            title="Please Enter a Valid Course Title."
                            type="text"
                            placeholder="Course Title"
                            name="coursetitle"
                            onChange={this.inputChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="inputfield">
                    <Form.Label column sm={2}>Target Audience</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            required
                            pattern="^[0-9]+$"
                            title="Plese select option from given values."
                            as="select"
                            name="targetaudience_id"
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

                <Form.Group as={Row} className="inputfield">
                    <Form.Label column sm={2}>Subject</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            required
                            pattern="^[0-9]+$"
                            title="Plese select option from given values."
                            as="select"
                            name="subject_id"
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
                            required
                            pattern="^[0-9]+$"
                            type="number"
                            placeholder="Course Fee"
                            name="fee"
                            onChange={this.inputChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="inputfield">
                    <Form.Label column sm={2}>Course Introduction</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows="5"
                            placeholder="Course Introduction"
                            name="courseintro"
                            onChange={this.inputChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button
                            className="float-right"
                            variant="outline-dark"
                            type="submit">
                            Add Course
                        </Button>
                    </Col>
                </Form.Group>
            </Form >

        if (this.state.loading) {
            newcourseform = <LoadingSpinner />
        }

        return (
            <div className="fullscreen">
                <div className="container" id="newcoursesetup">
                    <h4>New Course Setup</h4>

                    {newcourseform}

                    {this.state.error ?
                        <DModal show={this.state.error}
                            modalhandler={this.errorModalHandler}>
                            {Array.isArray(this.state.errormsg) ?
                                <>
                                    {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                                </>
                                : < p > {this.state.errormsg}</p>}
                        </DModal> : null}
                </div>
            </div>
        )
    }
}

export default NewCourse;
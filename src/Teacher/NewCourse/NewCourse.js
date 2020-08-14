import React, { useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CButton from '../../customFunctions/CButton/CButton';
import { targetAudienceType, subjectType } from '../../utils/variables';

import './NewCourse.css';

const NewCourse = React.memo(function NewCourse(props) {
    // New course input state
    const [newCourseState, setNewCourseState] = useState({
        courseTitle: '',
        courseIntro: '',
        targetAudience_id: "1",
        subject_id: '1',
        fee: ''
    })
    // Page loading variable
    const [isLoading, setIsLoading] = useState(false)

    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.authKey
        }
    }

    // Input handling function
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewCourseState(newCourseState => ({
            ...newCourseState,
            [name]: value
        }))
    }

    // Post new course
    const newCourseHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        const newCourse = {
            ...newCourseState
        }
        axios.post('course', newCourse, config)
            .then(response => {
                setIsLoading(false)
                props.history.push('/coursecontent/' + response.data)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let newCourseForm =
        <Form className="shadow p-3 mb-5 bg-white rounded" onSubmit={(e) => newCourseHandler(e)}>
            <Form.Group as={Row}>
                <Form.Label column sm={2}>Course Title</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        name="courseTitle"
                        type="text"
                        value={newCourseState.courseTitle}
                        placeholder="Course Title"
                        required
                        pattern="^[\w\s]{0,100}$"
                        title="Please enter a valid course title."
                        onChange={inputChangeHandler} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Target Audience</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        name="targetAudience_id"
                        as="select"
                        value={newCourseState.targetAudience_id}
                        required
                        pattern="^[0-9]+$"
                        title="Plese select an option from given values."
                        onChange={inputChangeHandler}>
                        {targetAudienceType()}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Subject</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        name="subject_id"
                        as="select"
                        value={newCourseState.subject_id}
                        required
                        pattern="^[0-9]+$"
                        title="Please select an option from given values."
                        onChange={inputChangeHandler}>
                        {subjectType()}
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Course Fee</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        name="fee"
                        placeholder="Course Fee"
                        value={newCourseState.fee}
                        required
                        pattern="^[0-9]+$"
                        type="number"
                        onChange={inputChangeHandler} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column sm={2}>Course Introduction</Form.Label>
                <Col sm={10}>
                    <Form.Control
                        name="courseIntro"
                        as="textarea"
                        rows="5"
                        value={newCourseState.courseIntro}
                        placeholder="Course Introduction"
                        onChange={inputChangeHandler} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <CButton
                        type="submit"
                        className="float-right"
                        variant="outline-dark">
                        Add Course
                    </CButton>
                </Col>
            </Form.Group>
        </Form >

    if (isLoading) {
        newCourseForm = <Spinner />
    }

    return (
        <div id="newcourse" className="fullscreen container">
            <h4>Add New Course</h4>

            {newCourseForm}

        </div>
    )
})

export default withErrorHandler(NewCourse, axios);
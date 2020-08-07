import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import CButton from '../../../customFunctions/CButton/CButton';
import { targetAudienceType, subjectType } from '../../../utils/variables';

import './CourseDetails.css';

const CourseDetails = React.memo(function CourseDetails(props) {
    const [detailsState, setDetailsState] = useState({ ...props })
    const [showCourseDetails, setShowCourseDetails] = useState(false)
    const [editCourseDetails, setEditCourseDetails] = useState(false)

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDetailsState(detailsState => ({
            ...detailsState,
            [name]: value
        }))
    }

    // Show course description box with all input fields disabled
    const showCourseDetailsHandler = () => {
        setShowCourseDetails(!showCourseDetails)
        setEditCourseDetails(true)
    }
    // Toggle edit setting for input field
    const editCourseDetailsHandler = () => {
        setEditCourseDetails(!editCourseDetails)
    }

    // Callback to the edit profile function in CourseContent
    const updateCourseHandler = (e) => {
        props.updateCourseHandler(e, detailsState.courseTitle, detailsState.targetAudience_id, detailsState.subject_id, detailsState.fee, detailsState.courseIntro);
        showCourseDetailsHandler();
    }

    const inputClearer = () => {
        setDetailsState({ ...props })
        setShowCourseDetails(false)
        setEditCourseDetails(false)
    }

    return (
        <React.Fragment>
            <CButton
                variant="light"
                onClick={showCourseDetailsHandler}>
                <i className="fas fa-info-circle"></i> Course Description
            </CButton>

            {showCourseDetails ?
                <div id="coursedetailsbox">
                    <Form onSubmit={(e) => updateCourseHandler(e)}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Course Title</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    disabled={editCourseDetails}
                                    name="courseTitle"
                                    type="text"
                                    value={detailsState.courseTitle}
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
                                    disabled={editCourseDetails}
                                    name="targetAudience_id"
                                    as="select"
                                    value={detailsState.targetAudience_id}
                                    required
                                    pattern="^[0-9]+$"
                                    title="Please select an option from given values."
                                    onChange={inputChangeHandler}>
                                    {targetAudienceType()}
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Subject</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    disabled={editCourseDetails}
                                    name="subject_id"
                                    as="select"
                                    value={detailsState.subject_id}
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
                                    disabled={editCourseDetails}
                                    name="fee"
                                    type="number"
                                    value={detailsState.fee}
                                    required
                                    pattern="^[0-9]+$"
                                    onChange={inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Course Introduction</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    disabled={editCourseDetails}
                                    name="courseIntro"
                                    as="textarea"
                                    rows="5"
                                    value={detailsState.courseIntro}
                                    onChange={inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        {editCourseDetails ?
                            null :
                            <div className="row align-items-center">
                                <CButton
                                    variant="light"
                                    onClick={inputClearer}>
                                    Discard Changes
                                </CButton>
                                <CButton
                                    type="submit"
                                    variant="light">
                                    <i className="far fa-save"></i> Save
                                </CButton>
                            </div>
                        }
                    </Form>

                    {editCourseDetails ?
                        <div className="row align-items-center">
                            <CButton
                                variant="light"
                                onClick={editCourseDetailsHandler}>
                                <i className="far fa-edit"></i> Edit
                            </CButton>
                        </div>
                        : null
                    }
                </div>
                : null
            }
        </React.Fragment >
    )
})

export default CourseDetails;
import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import CButton from '../../../customFunctions/CButton/CButton';
import { targetAudienceType, subjectType } from '../../../utils/variables';

import './CourseDetails.css';

const CourseDetails = React.memo(function CourseDetails(props) {
    const [detailsState, setDetailsState] = useState({ ...props })
    const [showCourseDetails, setShowCourseDetails] = useState(false)
    const [editCourseDetails, setEditCourseDetails] = useState(true)

    const inputChangeHandler = (e) => {
        const name = e.target.value;
        const value = e.target.name;
        setDetailsState(detailsState => ({
            ...detailsState,
            [name]: value
        }))
    }

    const showCourseDetailsHandler = () => {
        setShowCourseDetails(!showCourseDetails)
        setEditCourseDetails(true)
    }
    const editCourseDetailsHandler = () => {
        setEditCourseDetails(!editCourseDetails)
    }

    const updateCourseHandler = (e) => {
        props.updateCourseHandler(e, detailsState.courseTitle, detailsState.targetAudience_id, detailsState.subject_id, detailsState.courseIntro, detailsState.fee);
        showCourseDetailsHandler();
    }

    const inputClearerHandler = () => {
        setDetailsState(...props)
        setShowCourseDetails(false)
        setEditCourseDetails(true)
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
                        <Form.Group as={Row} className="inputfield" >
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

                        <Form.Group as={Row} className="inputfield" >
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

                        <Form.Group as={Row} className="inputfield">
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

                        <Form.Group as={Row} className="inputfield">
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

                        <Form.Group as={Row} className="inputfield">
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

                        <div id="coursedetailseditbutton" >
                            {editCourseDetails ?
                                <CButton
                                    variant="light"
                                    onClick={editCourseDetailsHandler}>
                                    <i className="far fa-edit"></i> Edit
                                </CButton>
                                : <React.Fragment>
                                    <CButton
                                        type="submit"
                                        variant="light">
                                        <i className="far fa-save"></i> Save
                                    </CButton>

                                    <CButton
                                        variant="light"
                                        onClick={inputClearerHandler}>
                                        Discard Changes
                                    </CButton>
                                </React.Fragment>
                            }
                        </div>
                    </Form>

                </div> : null
            }
        </React.Fragment >
    )
})

export default CourseDetails;
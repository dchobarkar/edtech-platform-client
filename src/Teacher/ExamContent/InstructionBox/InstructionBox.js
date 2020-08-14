import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CButton from '../../../customFunctions/CButton/CButton';

import './InstructionBox.css';

const InstructionBox = React.memo(function InstructionBox(props) {
    // Exam instructions input form state
    const [examState, setExamState] = useState({
        examTitle: props.examTitle,
        examInstruction: props.examInstruction,
        duration: props.duration,
    })
    // Exam details box show toggle variable
    const [showExamDetails, setShowExamDetails] = useState(false)
    // Exam instruction box edit state toggle variable
    const [editExamDetails, setEditExamDetails] = useState(false)

    // Input handling function
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setExamState(examState => ({
            ...examState,
            [name]: value
        }))
    }

    // Show exam instruction box with all input fields disabled
    const showExamDetailsHandler = () => {
        setShowExamDetails(!showExamDetails)
        setEditExamDetails(true)
    }
    // Toggle edit setting for input field
    const editExamDetailsHandler = () => {
        setEditExamDetails(!editExamDetails)
    }

    // Callback to the update exam function in ExamContent
    const updateExamHandler = (e) => {
        props.updateExamHandler(e, examState.examTitle, examState.examInstruction, examState.duration);
        showExamDetailsHandler();
    }

    // Clear any edited state in the exam instruction box
    const inputClearer = () => {
        setExamState({
            examTitle: props.examTitle,
            examInstruction: props.examInstruction,
            duration: props.duration
        })
        setShowExamDetails(false)
        setEditExamDetails(false)
    }

    return (
        <React.Fragment>
            <CButton
                variant="light"
                onClick={showExamDetailsHandler}>
                <i className="fas fa-info-circle"></i> Instructions
            </CButton>

            {showExamDetails ?
                <div id="examinstructionbox" className="row">
                    <Form onSubmit={(e) => updateExamHandler(e)}>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Exam Title</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    disabled={editExamDetails}
                                    name="examTitle"
                                    type="text"
                                    value={examState.examTitle}
                                    required
                                    pattern="^[\w\s]{0,100}$"
                                    title="Please enter a valid exam title."
                                    onChange={inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Exam Instructions</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    disabled={editExamDetails}
                                    name="examInstruction"
                                    as="textarea"
                                    rows="4"
                                    value={examState.examInstruction}
                                    onChange={inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Exam Duration</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    disabled={editExamDetails}
                                    name="duration"
                                    type="number"
                                    value={examState.duration}
                                    required
                                    pattern="^[0-9]+$"
                                    title="Please enter the duration of exam."
                                    onChange={inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        {editExamDetails ?
                            <div className="row align-items-center">
                                <CButton
                                    variant="light"
                                    onClick={editExamDetailsHandler}>
                                    <i className="far fa-edit"></i> Edit
                                </CButton>
                            </div>
                            :
                            <div className="row align-items-center">
                                <React.Fragment>
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
                                </React.Fragment>
                            </div>
                        }
                    </Form>
                </div >
                : null
            }
        </React.Fragment >
    )
})

export default InstructionBox;
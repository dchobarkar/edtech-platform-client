import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import CButton from '../../../customFunctions/CButton/CButton';

import './InstructionBox.css';

const InstructionBox = React.memo(function InstructionBox(props) {
    const [examState, setExamState] = useState({
        ...props
    })
    const [showExamDetails, setShowExamDetails] = useState(false)
    const [editExamDetails, setEditExamDetails] = useState(false)

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setExamState(examState => ({
            ...examState,
            [name]: value
        }))
    }

    const showExamDetailsHandler = () => {
        setShowExamDetails(!showExamDetails)
        setEditExamDetails(false)
    }
    const showEditHandler = () => {
        setEditExamDetails(!editExamDetails)
    }

    const inputClearerHandler = () => {
        setExamState({
            ...props
        })
        setShowExamDetails(false)
        setEditExamDetails(false)
    }

    const updateExamHandler = (e) => {
        props.updateExamHandler(e, examState.examTitle, examState.examInstruction, examState.duration);
        showExamDetailsHandler();
    }

    return (
        <React.Fragment>
            <CButton
                variant="light"
                onClick={showExamDetailsHandler}>
                <i className="fas fa-info-circle"></i> Instructions
            </CButton>

            {showExamDetails ?
                <div id="examinstructionbox">
                    <Form onSubmit={(e) => updateExamHandler(e)}>
                        <Form.Group className="inputfield">
                            <Form.Control
                                disabled={editExamDetails}
                                name="examTitle"
                                type="text"
                                value={examState.examTitle}
                                required
                                pattern="^[\w\s]{0,100}$"
                                title="Please enter a valid exam title."
                                onChange={inputChangeHandler} />
                        </Form.Group>

                        <Form.Group className="inputfield">
                            <Form.Control
                                disabled={editExamDetails}
                                name="examInstruction"
                                as="textarea"
                                rows="4"
                                value={examState.examInstruction}
                                onChange={inputChangeHandler} />
                        </Form.Group>

                        <Form.Group className="inputfield">
                            <Form.Control
                                disabled={editExamDetails}
                                name="duration"
                                type="number"
                                required
                                pattern="^[0-9]+$"
                                title="Please enter the duration of exam."
                                value={examState.duration}
                                onChange={inputChangeHandler} />
                        </Form.Group>

                        {editExamDetails ?
                            <React.Fragment>
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
                            </React.Fragment> :
                            <CButton
                                variant="light"
                                onClick={showEditHandler}>
                                <i className="far fa-edit"></i> Edit
                            </CButton>
                        }

                    </Form>
                </div >
                : null
            }

        </React.Fragment>
    )
})

export default InstructionBox;
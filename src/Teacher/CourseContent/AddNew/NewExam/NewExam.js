import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CButton from '../../../../customFunctions/CButton/CButton';

const NewExam = React.memo(function NewExam(props) {
    const [examState, setExamState] = useState({
        examTitle: '',
        examInstruction: '',
        examDuration: ''
    })

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setExamState(examState => ({
            ...examState,
            [name]: value
        }))
    }

    const newExamHandler = (e) => {
        props.newexamhandler(e, props.section_id, examState.examTitle, examState.examInstruction, examState.examDuration);
        let tempExamState = {
            examTitle: '',
            examInstruction: '',
            examDuration: ''
        }
        setExamState(tempExamState)
        props.closeTab('Exam');
    }

    return (
        <div id="addnew" className="container">
            <div className="row">
                <p>{examState.examTitle}</p>
                <Form onSubmit={(e) => newExamHandler(e)}>
                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Test Title</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="examTitle"
                                type="text"
                                value={examState.examTitle}
                                required
                                title="Please enter a valid exam title."
                                pattern="^[\w\s]{0,100}$"
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Instructions</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="examInstruction"
                                as="textarea"
                                rows="2"
                                value={examState.examInstruction}
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Duration</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="examDuration"
                                type="number"
                                value={examState.examDuration}
                                required
                                title="Please enter the duration of exam."
                                pattern="^[0-9]+$"
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <CButton
                        type="submit"
                        className="float-right"
                        variant="outline-dark">
                        Add
                    </CButton>
                </Form>
            </div>
        </div>
    )
})

export default NewExam;
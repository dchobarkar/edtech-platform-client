import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CModal from '../../../../customFunctions/CModal/CModal';
import CButton from '../../../../customFunctions/CButton/CButton';

const EditModal = React.memo(function EditModal(props) {
    // Question update input form state
    const [questionState, setQuestionState] = useState({
        ...props
    })

    // Input handling function
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setQuestionState(questionState => ({
            ...questionState,
            [name]: value
        }))
    }
    // File input handling function
    const fileInputHandler = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        setQuestionState(questionState => ({
            ...questionState,
            [name]: file
        }))
    }

    // Callback to the udpateQuestionHandler from ExamContent
    const updateQuestionHandler = (e) => {
        props.updateQuestionHandler(e, props.queIndex, props.question_id, questionState.que, questionState.opt1, questionState.opt2, questionState.opt3, questionState.opt4, questionState.answer, questionState.queImage);
        props.showEditModalHandler();
    }

    // Restore edited state 
    const inputClearer = () => {
        setQuestionState({
            ...props
        })
        props.showEditModalHandler();
    }

    return (
        <CModal
            show={props.show}
            onHide={inputClearer}>

            <Form onSubmit={(e) => updateQuestionHandler(e)}>
                <Form.Group>
                    <Form.Control
                        name="que"
                        as="textarea"
                        rows="2"
                        value={questionState.que}
                        required
                        title="Please enter the question."
                        onChange={inputChangeHandler} />
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Figure</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            name="queImage"
                            type="file"
                            onChange={fileInputHandler} />
                    </Col>
                </Form.Group>

                <Form.Row>
                    <Form.Group>
                        <Col lg={6}>
                            <Form.Control
                                name="opt1"
                                type="text"
                                value={questionState.opt1}
                                required
                                title="Please enter the option."
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col lg={6}>
                            <Form.Control
                                name="opt2"
                                type="text"
                                value={questionState.opt2}
                                required
                                title="Please enter the option."
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group>
                        <Col lg={6}>
                            <Form.Control
                                name="opt3"
                                type="text"
                                value={questionState.opt3}
                                required
                                title="Please enter the option."
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Col lg={6}>
                            <Form.Control
                                name="opt4"
                                type="text"
                                value={questionState.opt4}
                                required
                                title="Please enter the option."
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>
                </Form.Row>

                <Form.Group >
                    <Col lg={6}>
                        <Form.Label>Answer</Form.Label>
                        <Form.Control
                            name="answer"
                            as="select"
                            value={questionState.answer}
                            required
                            title="Please select an answer."
                            onChange={inputChangeHandler}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <CButton
                    variant="outline-dark"
                    onClick={inputClearer}>
                    Discard Changes
                </CButton>

                <CButton
                    type="submit"
                    className="float-right"
                    variant="outline-dark">
                    Save
                </CButton>
            </Form>
        </CModal>
    )
})

export default EditModal;
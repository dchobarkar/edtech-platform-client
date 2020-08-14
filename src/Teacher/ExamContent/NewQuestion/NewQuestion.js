import React, { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';

import CButton from '../../../customFunctions/CButton/CButton';

import './NewQuestion.css';

const NewQuestion = React.memo(function NewQuestion(props) {
    // New question input form state
    const [newQuestion, setNewQuestion] = useState({
        que: '',
        opt1: '',
        opt2: '',
        opt3: '',
        opt4: '',
        answer: 1,
        queImage: ''
    })
    // New question box toggler variable
    const [showNewQuestion, setShowNewQuestion] = useState(false)

    // Input handling function
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewQuestion(newQuestion => ({
            ...newQuestion,
            [name]: value
        }))
    }
    // File input handling function
    const fileInputHandler = (e) => {
        const name = e.target.name;
        const file = e.target.files[0]
        setNewQuestion(newQuestion => ({
            ...newQuestion,
            [name]: file
        }))
    }

    // New question input box show toggler
    const showNewQuestionHandler = () => {
        setShowNewQuestion(!showNewQuestion)
    }

    // Callback to the new question adder function from ExamContent
    const newQuestionHandler = (e) => {
        props.newQuestionHandler(e, newQuestion.que, newQuestion.opt1, newQuestion.opt2, newQuestion.opt3, newQuestion.opt4, newQuestion.answer, newQuestion.queImage);
        showNewQuestionHandler();
    }

    return (
        <div id="addnewquestion" className="container">
            <CButton
                variant="outline-dark"
                onClick={showNewQuestionHandler}>
                Add New Question
            </CButton>

            {showNewQuestion ?
                <div className="row">
                    <Form className="shadow p-2 bg-white rounded" onSubmit={(e) => newQuestionHandler(e)}>
                        <Form.Group>
                            <Form.Control
                                name="que"
                                as="textarea"
                                rows="2"
                                placeholder="Question"
                                required
                                title="Please Enter a question."
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
                                        placeholder="Option 1"
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
                                        placeholder="Option 2"
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
                                        placeholder="Option 3"
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
                                        required
                                        title="Please enter the option."
                                        placeholder="Option 4"
                                        onChange={inputChangeHandler} />
                                </Col>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Col lg={6}>
                                <Form.Label>Answer</Form.Label>
                                <Form.Control
                                    name="answer"
                                    as="select"
                                    required
                                    title="Please select the correct answer."
                                    onChange={inputChangeHandler}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>

                        <Form.Group>
                            <CButton
                                type="submit"
                                className="float-right"
                                variant="outline-dark">
                                Add
                            </CButton>
                        </Form.Group>
                    </Form>
                </div >
                : null
            }
        </div>
    )
})

export default NewQuestion;
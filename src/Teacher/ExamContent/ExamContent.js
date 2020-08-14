import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';

import InstructionBox from './InstructionBox/InstructionBox';
import EditButtons from './EditButton/EditButton';
import NewQuestion from './NewQuestion/NewQuestion';

import './ExamContent.css';

const ExamContent = React.memo(function ExamContent(props) {
    // Exam input form state
    const [examState, setExamState] = useState({
        exam_id: '',
        examTitle: '',
        examInstruction: '',
        duration: ''
    })
    // Question list (array)
    const [questionState, setQuestionState] = useState([])
    // Loading page variable
    const [isLoading, setIsLoading] = useState(false)

    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.authKey
        }
    }
    const exam_id = props.match.params.id

    // Get exam details along with all questions 
    useEffect(() => {
        // Check if user is logged in 
        if (!localStorage.authKey) {
            props.history.replace('/login')
        }
        setIsLoading(true)
        axios.get('/exam/' + exam_id + '/allquestions', {
            headers: {
                "Authorization": "Bearer " + localStorage.authKey
            }
        })
            .then(response => {
                const tempExamState = {
                    exam_id: response.data.exam_id,
                    examTitle: response.data.examTitle,
                    examInstruction: response.data.examInstruction,
                    duration: response.data.duration
                }
                const tempQuestionState = response.data.questions

                setExamState(examState => ({
                    ...tempExamState
                }))
                setQuestionState(tempQuestionState)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [])

    // Update exam content
    const updateExamHandler = (e, examTitle, examInstruction, duration) => {
        e.preventDefault();
        setIsLoading(true)
        const updatedExam = {
            examTitle: examTitle,
            examInstruction: examInstruction,
            duration: duration
        }
        axios.patch('/exam/' + exam_id + '/update', updatedExam, config)
            .then(response => {
                const tempExamState = {
                    exam_id: response.data.exam_id,
                    examTitle: response.data.examTitle,
                    examInstruction: response.data.examInstruction,
                    duration: response.data.duration
                }
                setExamState(examState => ({
                    ...examState,
                    ...tempExamState
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    // Add new question in exam
    const newQuestionHandler = (e, que, opt1, opt2, opt3, opt4, answer, queImage) => {
        e.preventDefault();
        setIsLoading(true)
        const newQuestion = new FormData();
        newQuestion.append('que', que)
        newQuestion.append('opt1', opt1)
        newQuestion.append('opt2', opt2)
        newQuestion.append('opt3', opt3)
        newQuestion.append('opt4', opt4)
        newQuestion.append('answer', answer)
        newQuestion.append('image', queImage)

        axios.post('/question/' + exam_id, newQuestion, config)
            .then(response => {
                const newQuestion = {
                    ...response.data
                }
                setQuestionState(questionState => ([
                    ...questionState,
                    { ...newQuestion }
                ]))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    // Update a question in exam
    const updateQuestionHandler = (e, queIndex, question_id, que, opt1, opt2, opt3, opt4, answer, queImage) => {
        e.preventDefault();
        setIsLoading(false)

        const updatedQuestion = new FormData();
        updatedQuestion.append('que', que)
        updatedQuestion.append('opt1', opt1)
        updatedQuestion.append('opt2', opt2)
        updatedQuestion.append('opt3', opt3)
        updatedQuestion.append('opt4', opt4)
        updatedQuestion.append('answer', answer)
        updatedQuestion.append('image', queImage)

        axios.patch('/question/' + question_id + '/update', updatedQuestion, config)
            .then(response => {
                const tempQuestionState = [...questionState];
                const tempQuestion = {
                    ...tempQuestionState[queIndex],
                    ...response.data
                }
                tempQuestionState[queIndex] = tempQuestion

                setQuestionState(questionState => ([
                    ...tempQuestionState
                ]))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    // Delete an question from exam
    const deleteQuestionHandler = (queIndex, question_id) => {
        setIsLoading(false)
        axios.delete('/question/' + question_id)
            .then(response => {
                const tempQuestionState = [...questionState]
                tempQuestionState.splice(queIndex, 1)

                setQuestionState(questionState => ([
                    ...tempQuestionState
                ]))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let examContent =
        <div id="examdetails" className="container">
            <div className="row">
                {questionState.map((question, Index) => (
                    <div key={question.que_id} id="question">
                        {Index + 1}. {question.que}

                        <EditButtons
                            queIndex={Index}
                            que_id={question.que_id}
                            que={question.que}
                            opt1={question.opt1}
                            opt2={question.opt2}
                            opt3={question.opt3}
                            opt4={question.opt4}
                            answer={question.answer}
                            updateQuestionHandler={updateQuestionHandler}
                            deleteQuestionHandler={deleteQuestionHandler} />

                        {question.queImage === "none" || question.queImage === undefined ?
                            null :
                            <div id="queimag">
                                <Image alt={"Question Image"} src={question.queImage} />
                            </div>
                        }
                        <span><input type="radio" defaultChecked={"1" === question.answer} />1) <label>{question.opt1}</label></span>
                        <span><input type="radio" defaultChecked={"2" === question.answer} />2) <label>{question.opt2}</label></span>
                        <span><input type="radio" defaultChecked={"3" === question.answer} />3) <label>{question.opt3}</label></span>
                        <span><input type="radio" defaultChecked={"4" === question.answer} />4) <label>{question.opt4}</label></span>

                        <p>Answer : Option {question.answer}</p>
                    </div>
                ))}
            </div>
        </div>

    if (isLoading) {
        examContent = <Spinner />
    }

    return (
        <div id="examcontent" className="fullscreen container">
            <React.Fragment>
                <h3>{examState.examTitle}</h3>
                {/* Exam instructions box */}
                <InstructionBox
                    examTitle={examState.examTitle}
                    examInstruction={examState.examInstruction}
                    duration={examState.duration}
                    updateExamHandler={updateExamHandler} />

                {examContent}

                <NewQuestion newQuestionHandler={newQuestionHandler} />
            </React.Fragment>
        </div>
    )
})

export default withErrorHandler(ExamContent, axios);
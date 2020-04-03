import React, { Component } from 'react';

import QueInstructionBox from './QueInstructionBox/QueInstructionBox';
import QueEditButtons from './QueEditButton/QueEditButton';
import NewQuestion from '../NewQuestion/NewQuestion';

import axios from '../../../../axios-server';

import './QuestionPaper.css';

class QuestionPaper extends Component {
    state = {
        examtitle: null,
        examinstruction: null,
        questionentitys: [],
    }

    componentDidMount() {
        const examid = this.props.match.params.id;
        axios.get('/exam/' + examid + '/allquestions')
            .then(response => {
                this.setState({
                    ...response.data
                })
            })
            .catch(error => { alert(error.message) })
    }

    updateExamHandler = (examtitle, examinstruction, duration) => {
        const examid = this.props.match.params.id;
        const updatedExam = {
            examtitle: examtitle,
            examinstruction: examinstruction,
            duration: duration
        }
        axios.patch('/exam/' + examid + '/update', updatedExam)
            .then(response => {
                this.setState({
                    ...response.data
                })
            })
            .catch(error => { alert(error.message) })
    }

    newQuestionHandler = (que, opt1, opt2, opt3, opt4, answer, queimage) => {
        const queid = this.props.match.params.id;
        const newQuestion = {
            que: que,
            opt1: opt1,
            opt2: opt2,
            opt3: opt3,
            opt4: opt4,
            answer: answer,
            queimage: 'https://i.pinimg.com/736x/12/59/ee/1259eed79f7a22c7b3a0abfc616623ea.jpg',
        }
        axios.post('/question/' + queid, newQuestion)
            .then(response => {
                const addquestion = [...this.state.questionentitys];
                const newquestion = {
                    ...response.data
                }
                addquestion.push(newquestion);

                this.setState({
                    questionentitys: addquestion,
                })
            })
            .catch(error => { alert(error.message) })
    }

    updateQuestionHandler = (queIndex, queid, que, opt1, opt2, opt3, opt4, answer, queimage) => {
        console.log(queIndex, queid, que, opt1, opt2, opt3, opt4, answer, queimage)
        const updatedQuestion = {
            que: que,
            opt1: opt1,
            opt2: opt2,
            opt3: opt3,
            opt4: opt4,
            answer: answer,
            queimage: queimage
        }
        axios.patch('/question/' + queid + '/update', updatedQuestion)
            .then(response => {
                const updatedQuestion = [...this.state.questionentitys];
                updatedQuestion[queIndex].que = que;
                updatedQuestion[queIndex].opt1 = opt1;
                updatedQuestion[queIndex].opt2 = opt2;
                updatedQuestion[queIndex].opt3 = opt3;
                updatedQuestion[queIndex].opt4 = opt4;
                updatedQuestion[queIndex].answer = answer;
                updatedQuestion[queIndex].queimage = queimage;
                this.setState({
                    questionentitys: updatedQuestion
                })
            })
            .catch(error => { alert(error.message) })
    }

    deleteQuestionHandler = (queIndex, queid) => {
        console.log(queIndex, queid)

        axios.delete('/question/' + queid)
            .then(response => {
                const questionentitys = [...this.state.questionentitys];
                questionentitys.splice(queIndex, 1);

                this.setState({
                    questionentitys: questionentitys
                })
            })
            .catch(error => { alert(error.message) })
    }

    render() {
        return (
            <div className="fullscreen" id="questionpaper">
                {this.state.examtitle ?
                    <>
                        <h3>{this.state.examtitle}</h3>
                        <QueInstructionBox
                            examtitle={this.state.examtitle}
                            examinstruction={this.state.examinstruction}
                            duration={this.state.duration}
                            updateexamhandler={this.updateExamHandler} />

                        <section id="exampreview">
                            <div className="container">
                                <div className="row">

                                    {this.state.questionentitys.map((question, Index) => {
                                        return <div id="question" key={question.que_id}>
                                            {Index + 1}. {question.que}

                                            <QueEditButtons
                                                queIndex={Index}
                                                queid={question.que_id}
                                                que={question.que}
                                                opt1={question.opt1}
                                                opt2={question.opt2}
                                                opt3={question.opt3}
                                                opt4={question.opt4}
                                                answer={question.answer}
                                                queimage={question.queimage}
                                                updatequestionhandler={this.updateQuestionHandler}
                                                deletequestionhandler={this.deleteQuestionHandler} />

                                            <span><input type="radio" />1) <label>{question.opt1}</label></span>
                                            <span><input type="radio" />2) <label>{question.opt2}</label></span>
                                            <span><input type="radio" />3) <label>{question.opt3}</label></span>
                                            <span><input type="radio" />4) <label>{question.opt4}</label></span>
                                            <p>Answer : Option {question.answer}</p>
                                            {question.queimage}
                                        </div>
                                    })}
                                </div>
                            </div>
                        </section>

                        <section id="addnewquestion">
                            <NewQuestion newquestionhandler={this.newQuestionHandler} />
                        </section>
                    </>
                    : null}
            </div>
        )
    }
}

export default QuestionPaper;
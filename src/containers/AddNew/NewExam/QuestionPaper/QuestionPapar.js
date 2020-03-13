import React, { Component } from 'react';
import NewQuestion from '../NewQuestion/NewQuestion'

import './QuestionPaper.css';

class QuestionPaper extends Component {
    state = {
        id: 10,
        examname: 'Life',
        instructions: 'All you can do is try',
        questions: [
            {
                id: 1,
                que: 'what is the velocity of light',
                opt1: '3m/s',
                opt2: '30m/s',
                opt3: '300m/s',
                opt4: '300000000m/s',

            },
            {
                id: 2,
                que: 'what is the velocity of light',
                opt1: '3m/s',
                opt2: '30m/s',
                opt3: '300m/s',
                opt4: '300000000m/s',

            },
            {
                id: 3,
                que: 'what is the velocity of light',
                opt1: '3m/s',
                opt2: '30m/s',
                opt3: '300m/s',
                opt4: '300000000m/s',

            },
            {
                id: 4,
                que: 'what is the velocity of light',
                opt1: '3m/s',
                opt2: '30m/s',
                opt3: '300m/s',
                opt4: '300000000m/s',

            },
            {
                id: 5,
                que: 'what is the velocity of light',
                opt1: '3m/s',
                opt2: '30m/s',
                opt3: '300m/s',
                opt4: '300000000m/s',

            },
            {
                id: 6,
                que: 'what is the velocity of light',
                opt1: '3m/s',
                opt2: '30m/s',
                opt3: '300m/s',
                opt4: '300000000m/s',

            }
        ]
    }

    newQuestionHandler = (que, opt1, opt2, opt3, opt4) => {
        const newquestion = {
            que: que,
            opt1: opt1,
            opt2: opt2,
            opt3: opt3,
            opt4: opt4,
            id: this.state.id + 1
        }
        const addquestion = [...this.state.questions];
        addquestion.push(newquestion);
        this.setState({
            questions: addquestion,
            id: newquestion.id
        })
    }

    render() {
        return (
            <div className="fullscreen" id="questionpaper">
                <h3>Exam 1</h3>
                <h6>Preview</h6>
                <section id="exampreview">
                    <div className="container">
                        <div className="row">
                            {this.state.questions.map((question, Index) => {
                                return <div id="question" key={question.id}>
                                    <p>{Index + 1}. {question.que}</p>
                                    <span><input type="radio" />1) <label>{question.opt1}</label></span>
                                    <span><input type="radio" />2) <label>{question.opt2}</label></span>
                                    <span><input type="radio" />3) <label>{question.opt3}</label></span>
                                    <span><input type="radio" />4) <label>{question.opt4}</label></span>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
                <section id="addnewquestion">
                    <NewQuestion
                        newquestionsubmit={this.newQuestionHandler} />
                </section>
            </div>
        )
    }
}

export default QuestionPaper;
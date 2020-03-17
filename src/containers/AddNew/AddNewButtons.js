import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import NewChapter from './NewChapter/NewChapter';
import NewLecture from './NewLecture/NewLecture';
import NewExam from './NewExam/NewExam';

import './AddNewButton.css';

class AddNewButtons extends Component {
    state = {
        newchapter: false,
        newlecture: false,
        newexam: false
    }

    newContentHandler = (e) => {
        if (e === 'Chapter') {
            this.setState({
                newlecture: false,
                newexam: false,
                newchapter: !this.state.newchapter
            })
        }
        else if (e === 'Lecture') {
            this.setState({
                newchapter: false,
                newexam: false,
                newlecture: !this.state.newlecture
            })
        }
        else if (e === 'Exam') {
            this.setState({
                newchapter: false,
                newlecture: false,
                newexam: !this.state.newexam
            })
        }
    }

    render() {
        let disable = null;
        this.props.disablebutton > 0 ? disable = false : disable = true;

        return (
            <div>
                <section id="addbutton">
                    <div className="container">
                        <div className="row">
                            <Button
                                variant="outline-dark"
                                onClick={() => this.newContentHandler('Chapter')}>
                                New Chapter
                            </Button>

                            <Button
                                disabled={disable}
                                variant="outline-dark"
                                onClick={() => this.newContentHandler('Lecture')}>
                                New Lecture
                            </Button>

                            <Button
                                disabled={disable}
                                variant="outline-dark"
                                onClick={() => this.newContentHandler('Exam')}>
                                New Exam
                            </Button>
                        </div>
                    </div>
                </section>

                <section>
                    {this.state.newchapter ?
                        <NewChapter
                            newchaptersubmit={this.props.newchaptersubmit}
                            closetab={this.newContentHandler} /> : null}

                    {this.state.newlecture ?
                        <NewLecture
                            newlessonsubmit={this.props.newlessonsubmit}
                            closetab={this.newContentHandler} /> : null}

                    {this.state.newexam ?
                        <NewExam
                            newexamsubmit={this.props.newexamsubmit}
                            closetab={this.newContentHandler} /> : null}
                </section>
            </div>
        )
    }
}

export default AddNewButtons;
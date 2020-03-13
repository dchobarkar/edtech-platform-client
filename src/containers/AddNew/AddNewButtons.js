import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import NewChapter from './NewChapter/NewChapter';
import NewLecture from './NewLecture/NewLecture';
import NewExam from './NewExam/NewExam';

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
        return (
            <div>
                <section id="addbutton">
                    <div className="container">
                        <div className="row">
                            <Button
                                onClick={() => this.newContentHandler('Chapter')}
                                variant="outline-dark"
                            >New Chapter
                            </Button>
                            <Button
                                onClick={() => this.newContentHandler('Lecture')}
                                variant="outline-dark"
                            >New Lecture
                            </Button>
                            <Button
                                onClick={() => this.newContentHandler('Exam')}
                                variant="outline-dark"
                            >New Exam
                            </Button>
                        </div>
                    </div>
                </section>

                <section>
                    {this.state.newchapter ? <NewChapter newchaptersubmit={this.props.newchaptersubmit} /> : null}

                    {this.state.newlecture ? <NewLecture newlessonsubmit={this.props.newlessonsubmit} /> : null}

                    {this.state.newexam ? <NewExam newexamsubmit={this.props.newexamsubmit} /> : null}
                </section>
            </div>
        )
    }
}

export default AddNewButtons;
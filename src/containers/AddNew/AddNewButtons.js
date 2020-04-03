import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import NewSection from './NewSection/NewSection';
import NewLecture from './NewLecture/NewLecture';
import NewExam from './NewExam/NewExam';

import './AddNewButton.css';

class AddNewButtons extends Component {
    state = {
        newsection: false,
        newlecture: false,
        newexam: false
    }

    newContentHandler = (e) => {
        if (e === 'Section') {
            this.setState({
                newlecture: false,
                newexam: false,
                newsection: !this.state.newsection
            })
        }
        else if (e === 'Lecture') {
            this.setState({
                newsection: false,
                newexam: false,
                newlecture: !this.state.newlecture
            })
        }
        else if (e === 'Exam') {
            this.setState({
                newsection: false,
                newlecture: false,
                newexam: !this.state.newexam
            })
        }
    }

    render() {
        return (
            <>
                <section id="addbutton">
                    <div className="container">
                        <div className="row">
                            {this.props.insidesection ? null :
                                <Button
                                    variant="outline-dark"
                                    onClick={() => this.newContentHandler('Section')}>
                                    New Section
                                </Button>}
                            {this.props.insidesection ?
                                <>
                                    <Button
                                        variant="outline-dark"
                                        onClick={() => this.newContentHandler('Lecture')}>
                                        New Lecture
                                    </Button>

                                    <Button
                                        variant="outline-dark"
                                        onClick={() => this.newContentHandler('Exam')}>
                                        New Exam
                                    </Button>
                                </> : null}
                        </div>
                    </div>
                </section>

                {this.state.newsection ?
                    <NewSection
                        newsectionhandler={this.props.newsectionhandler}
                        closetab={this.newContentHandler} /> : null}

                {this.state.newlecture ?
                    <NewLecture
                        sectionid={this.props.sectionid}
                        newlecturehandler={this.props.newlecturehandler}
                        closetab={this.newContentHandler} /> : null}

                {this.state.newexam ?
                    <NewExam
                        sectionid={this.props.sectionid}
                        newexamhandler={this.props.newexamhandler}
                        closetab={this.newContentHandler} /> : null}
            </>
        )
    }
}

export default AddNewButtons;
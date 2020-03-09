import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CourseContent.css';

class CourseContent extends Component {
    state = {
        coursename: 'Physics I',
        chaptername: 'Lesson 1',
        coursedetails: [
            {
                lecturename: 'lecture 1 : Circular Motion',
                description: '1',
                show: false,
                isnew: false,
                id: '1'
            },
            {
                lecturename: 'lecture 2 : Units and Measurements',
                description: '2',
                show: false,
                isnew: false,
                id: '2'
            },
            {
                lecturename: 'lecture 3 : Magnetic Movements',
                description: '3',
                show: false,
                isnew: false,
                id: '3'
            },
            {
                lecturename: 'lecture 4 : Linear Motion ',
                description: '4',
                show: false,
                isnew: false,
                id: '4'
            },
            {
                lecturename: 'lecture 5 : Kinetic Energy',
                description: '5',
                show: false,
                isnew: false,
                id: '5'
            }
        ],
        newchapter: false,
        newlecture: false,
        newexam: false,
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    LectureDescription = (description) => (
        <div id="description">
            {description}
        </div>
    )
    showDescriptionHandler = (event, id) => {
        const detailsIndex = this.state.coursedetails.findIndex(d => {
            return d.id === id
        });
        const detail = {
            ...this.state.coursedetails[detailsIndex]
        };
        detail.show = !detail.show;

        const details = [...this.state.coursedetails];
        details[detailsIndex] = detail;

        this.setState({
            coursedetails: details
        })
    }

    editDetailsHandler = (e, id) => {
        const detailsIndex = this.state.coursedetails.findIndex(d => {
            return d.id === id
        });
        const detail = {
            ...this.state.coursedetails[detailsIndex]
        };
        detail.isnew = !detail.isnew;

        const details = [...this.state.coursedetails];
        details[detailsIndex] = detail;

        this.setState({
            coursedetails: details,
            newlecture: !this.state.newlecture
        })
    }

    deleteLectureHandler = (lectureindex) => {
        const lectures = [...this.state.coursedetails];
        lectures.splice(lectureindex, 1);
        this.setState({
            coursedetails: lectures
        })
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

        console.log(this.state)
    }

    NewChapterAdder = () => (
        <section id="addnew">
            <div className="container">
                <div className="row">
                    <p>Title</p>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Chapter Name
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    value={this.state.isnew ? this.state.chapter : "Title"}
                                    name="chaptername"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>
                                Description
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="textarea"
                                    rows="2"
                                    value={this.state.isnew ? this.state.description : "description"}
                                    name="description"
                                    onChange={this.inputChangeHandler} />

                            </Col>
                        </Form.Group>
                        <Button
                            onClick={() => this.newContentHandler('Chapter')}
                            className="float-right"
                            variant="outline-dark">Add
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    )

    newLectureAdder = () => (
        <section id="addnew">
            <div className="container">
                <div className="row">
                    <p>Lecture Name</p>
                    <Form>
                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Lecture Name
                                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    value={this.state.lecturename}
                                    name="lecturename"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Content
                                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="textarea"
                                    rows="2"
                                    value={this.state.description}
                                    name="description"
                                    onChange={this.inputChangeHandler} />

                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="lecturevideo">
                            <Form.Label column sm={2}>
                                Video
                                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    type="file"
                                    name="Video" />
                            </Col>
                        </Form.Group>
                        <Button
                            onClick={() => this.newContentHandler('Lecture')}
                            className="float-right"
                            variant="outline-dark">Add
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    )

    newExamAdder = () => (
        <section id="addnew">
            <div className="container">
                <div className="row">
                    <p>Exam Title</p>
                    <Form>
                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Test Title
                                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    value={this.state.lecturename}
                                    name="lecturename"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} >
                            <Form.Label column sm={2}>
                                Instructions
                                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    as="textarea"
                                    rows="2"
                                    value={this.state.description}
                                    name="description"
                                    onChange={this.inputChangeHandler} />
                            </Col>
                        </Form.Group>

                        <Button
                            onClick={() => this.newContentHandler('Exam')}
                            className="float-right"
                            variant="outline-dark">Add
                                </Button>
                    </Form>
                </div>
            </div>
        </section>
    )


    render() {
        return (
            <div className="fullscreen">
                <section id="previouscontent">
                    <div className="container">
                        <h4>{this.state.coursename}</h4>
                        <div className="row" id="individualchapter">
                            <div id="chaptername">
                                <span>{this.state.chaptername}</span>
                                <Button
                                    className="float-right"
                                    variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button
                                    onClick={() => this.editDetailsHandler(true)}
                                    className="float-right"
                                    variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button
                                    onClick={this.showDescriptionHandler}
                                    className="float-right"
                                    variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                {this.state.show ? <this.LectureDescription /> : null}
                            </div>
                            {this.state.coursedetails.map((lecture, index) => {
                                return < div id="individualcontent" >
                                    <span>{lecture.lecturename}</span>
                                    <Button
                                        onClick={() => this.deleteLectureHandler(index)}
                                        className="float-right"
                                        variant="light">
                                        <i className="fas fa-trash-alt"></i>
                                    </Button>
                                    <Button
                                        onClick={(event) => this.editDetailsHandler(true, lecture.id)}
                                        className="float-right"
                                        variant="light">
                                        <i className="far fa-edit"></i>
                                    </Button>
                                    <Button
                                        onClick={(event) => this.showDescriptionHandler(event, lecture.id)}
                                        className="float-right"
                                        variant="light">
                                        <i className="fas fa-book"></i>
                                    </Button>
                                    {lecture.show ? this.LectureDescription(lecture.description) : null}
                                </div>
                            })}
                        </div>
                    </div>
                </section>


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

                {this.state.newchapter ? <this.NewChapterAdder /> : null}
                {this.state.newlecture ? <this.newLectureAdder /> : null}
                {this.state.newexam ? <this.newExamAdder /> : null}

            </div >
        )
    }
}

export default CourseContent;
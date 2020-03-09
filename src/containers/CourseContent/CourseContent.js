import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CourseContent.css';

class CourseContent extends Component {
    state = {
        coursename: 'Physics I',
        chaptername: 'Lesson 1',
        lecturename: 'lecture 1',
        description: 'DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.',
        examname: 'exam 1',
        show: false,
        newchapter: false,
        newlecture: false,
        newexam: false,
        isnew: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showDescriptionHandler = () => {
        this.setState({
            show: !this.state.show
        })
    }
    LectureDescription = () => (
        <div id="description">
            {this.state.description}
        </div>
    )


    newChapterHandler = (e) => {
        this.setState({
            newlecture: false,
            newexam: false,
            newchapter: !this.state.newchapter
        })
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
                                    value={this.state.isnew ? this.state.chaptername : "Title"}
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
                            onClick={this.newChapterHandler}
                            className="float-right"
                            variant="outline-dark">Add
                        </Button>
                    </Form>
                </div>
            </div>
        </section>
    )

    newLectureHandler = () => {
        this.setState({
            newchapter: false,
            newexam: false,
            newlecture: !this.state.newlecture
        })
    }
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
                            onClick={this.newLectureHandler}

                            className="float-right"
                            variant="outline-dark">Add
                                </Button>
                    </Form>
                </div>
            </div>
        </section>
    )

    newexamHandler = () => {
        this.setState({
            newchapter: false,
            newlecture: false,
            newexam: !this.state.newexam
        })
    }
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
                            onClick={this.newexamHandler}
                            className="float-right"
                            variant="outline-dark">Add
                                </Button>
                    </Form>
                </div>
            </div>
        </section>
    )

    editDetailsHandler = () => {
        this.setState({
            isnew: !this.state.isnew,
            newchapter: !this.state.newchapter
        })
    }


    render() {
        return (
            <div className="fullscreen">
                <section id="previouscontent">
                    <div className="container">
                        <h4>{this.state.coursename}</h4>
                        <div className="row" id="individualchapter">
                            <div id="chaptername">
                                <span>{this.state.chaptername}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button
                                    onClick={this.editDetailsHandler}
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

                            <div id="individualcontent">
                                <span>{this.state.lecturename}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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

                            <div id="individualcontent">
                                <span>{this.state.lecturename}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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

                            <div id="individualcontent">
                                <span>{this.state.lecturename}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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

                            <div id="individualcontent">
                                <span>{this.state.examname}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Link to={"/newquestion"}>
                                    <Button className="float-right" variant="light">
                                        <i className="far fa-edit"></i>
                                    </Button>
                                </Link>
                                <Button
                                    onClick={this.showDescriptionHandler}
                                    className="float-right"
                                    variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                {this.state.show ? <this.LectureDescription /> : null}
                            </div>
                        </div>

                        <div className="row" id="individualchapter">
                            <div id="chaptername">
                                <span>{this.state.chaptername}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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

                            <div id="individualcontent">
                                <span>{this.state.lecturename}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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

                            <div id="individualcontent">
                                <span>{this.state.lecturename}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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

                            <div id="individualcontent">
                                <span>{this.state.lecturename}</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
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
                        </div>
                    </div>
                </section>


                <section id="addbutton">
                    <div className="container">
                        <div className="row">
                            <Button
                                onClick={this.newChapterHandler}
                                variant="outline-dark"
                            >New Chapter
                            </Button>
                            <Button
                                onClick={this.newLectureHandler}
                                variant="outline-dark"
                            >New Lecture
                            </Button>
                            <Button
                                onClick={this.newexamHandler}
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
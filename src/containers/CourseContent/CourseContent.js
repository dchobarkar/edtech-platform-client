import React, { Component } from 'react';
import './CourseContent.css';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CourseContent extends Component {
    render() {
        return (
            <div id="coursecontent">
                <section id="previouscontent">
                    <h4>Course Content</h4>
                    <div className="container">
                        <div className="row">
                            <h6>Chapter 1</h6>
                            <div id="individualcontent">
                                <p>Lecture 1 : Newton's Fourth Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                            <div id="individualcontent">
                                <p>Lecture 2 : Newton's Fifth Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                            <div id="individualcontent">
                                <p>Lecture 3 : Newton's Sixth Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                            <div id="individualcontent">
                                <p>Exam 1 : Newton's 10th Law
                                </p>
                                <Link to={'/newquestion'}><Button>Edit</Button></Link>
                                <Button>Delete</Button>
                            </div>
                        </div>
                        <div className="row">
                            <h6>Chapter 2</h6>
                            <div id="individualcontent">
                                <p>Lecture 4 : Newton's Fourth Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                            <div id="individualcontent">
                                <p>Lecture 5 : Newton's Fifth Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                            <div id="individualcontent">
                                <p>Lecture 6 : Newton's Sixth Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                            <div id="individualcontent">
                                <p>Exam 2 : Newton's 10th Law
                                </p>
                                <Button>Edit</Button>
                                <Button>Delete</Button>
                            </div>
                        </div>

                    </div>
                </section>
                <section id="addbutton">
                    <div className="container">
                        <div className="row">
                            <Button>New Chapter</Button>
                            <Button>New Lecture</Button>
                            <Button>New Exam</Button>
                        </div>
                    </div>
                </section>

                <section id="addnewchapter">
                    <div className="container">
                        <div className="row">
                            <p>Chapter Name(Maybe Two-way Binding)</p>
                            <Form>
                                <Form.Group as={Row} controlId="chaptername">
                                    <Form.Label column sm={2}>
                                        Chapter Name
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Title" />
                                    </Col>
                                </Form.Group>
                            </Form>

                            <Form>
                                <Form.Group as={Row} controlId="chapterdescription">
                                    <Form.Label column sm={2}>
                                        Description
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control as="textarea" rows="2" placeholder="Description" />
                                    </Col>
                                </Form.Group>
                                <Button>Add</Button>

                            </Form>
                        </div>
                    </div>
                </section>
                <section id="addnewlecture">
                    <div className="container">
                        <div className="row">
                            <p>Lecture Name (Two-way Binding)</p>
                            <Form>
                                <Form.Group as={Row} controlId="chaptername">
                                    <Form.Label column sm={2}>
                                        Lecture Name
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Title" />
                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row} controlId="chapterdescription">
                                    <Form.Label column sm={2}>
                                        Content
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control as="textarea" rows="2" placeholder="Description" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="questionimage">
                                    <Form.Label column sm={2}>
                                        Video
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="file"
                                            name="Video" />
                                    </Col>
                                </Form.Group>

                                <Button>Add</Button>

                            </Form>

                        </div>
                    </div>
                </section>
                <section id="addnewexam">
                    <div className="container">
                        <div className="row">
                            <p>Exam Title (Two-way Binding)</p>
                            <Form>
                                <Form.Group as={Row} controlId="chaptername">
                                    <Form.Label column sm={2}>
                                        Test Title
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="text" placeholder="Title" />
                                    </Col>

                                </Form.Group>

                                <Form.Group as={Row} controlId="chapterdescription">
                                    <Form.Label column sm={2}>
                                        Instructions
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control as="textarea" rows="2" placeholder="instructions" />
                                    </Col>
                                </Form.Group>

                                <Button>Add</Button>

                            </Form>

                        </div>
                    </div>
                </section>
            </div >


        )
    }
}

export default CourseContent;
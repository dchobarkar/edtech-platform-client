import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './CourseContent.css';

class CourseContent extends Component {
    state = {
        coursename: 'Physics I',
        1: {
            chaptername: 'Chapter 1',

        }
    }
    render() {
        return (
            <div className="fullscreen">
                <section id="previouscontent">
                    <div className="container">
                        <h4>{this.state.coursename}</h4>
                        <div className="row" id="individualchapter">
                            <h6>Chapter 1</h6>
                            <div id="individualcontent">
                                <span>Lecture 1 : Newton's Fourth Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>

                            <div id="individualcontent">
                                <span>Lecture 2 : Newton's Fourth Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>

                            <div id="individualcontent">
                                <span>Lecture 3 : Newton's Fifth Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>

                            <div id="individualcontent">
                                <span>Exam 1 : Newton's 10th Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>
                        </div>

                        <div className="row" id="individualchapter">
                            <h6>Chapter 2</h6>
                            <div id="individualcontent">
                                <span>Lecture 4 : Newton's 6th Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>

                            <div id="individualcontent">
                                <span>Lecture 5 : Newton's 7th Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>

                            <div id="individualcontent">
                                <span>Lecture 6 : Newton's 8th Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>

                            <div id="individualcontent">
                                <span>Exam 2 : Newton's 11th Law</span>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-trash-alt"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="far fa-edit"></i>
                                </Button>
                                <Button className="float-right" variant="light">
                                    <i className="fas fa-book"></i>
                                </Button>
                                <div id="description">
                                    DescriptionLorem ipsum dolor sit amet, cu vis epicuri reprimique, id eam ubique gubergren, cetero prompta liberavisse quo an. Vel et fierent urbanitas ullamcorper, te eum consequat reprehendunt. Sea habeo suscipiantur id, ne sed ridens audiam albucius. Mei id summo persius, cu nec quem amet esse. Eos duis vocibus molestie id.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section id="addbutton">
                    <div className="container">
                        <div className="row">
                            <Button variant="outline-dark">New Chapter</Button>
                            <Button variant="outline-dark">New Lecture</Button>
                            <Button variant="outline-dark">New Exam</Button>
                        </div>
                    </div>
                </section>


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
                                            placeholder="Title" />
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
                                            placeholder="Description" />
                                    </Col>
                                </Form.Group>
                                <Button
                                    className="float-right"
                                    variant="outline-dark">Add
                                    </Button>
                            </Form>
                        </div>
                    </div>
                </section>

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
                                            placeholder="Title" />
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
                                            placeholder="Description" />
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
                                    className="float-right"
                                    variant="outline-dark">Add
                                </Button>
                            </Form>
                        </div>
                    </div>
                </section>

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
                                            placeholder="Title" />
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
                                            placeholder="Instructions" />
                                    </Col>
                                </Form.Group>

                                <Button
                                    className="float-right"
                                    variant="outline-dark">Add
                                </Button>
                            </Form>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}

export default CourseContent;
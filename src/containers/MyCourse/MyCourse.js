import React, { Component } from 'react';
import { Button, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MyCourse.css';

class MyCourse extends Component {
    state = {
        details: [
            { coursename: 'Physics I', students: '299', date: '06/02/2020', targetaudiance: '11th' },
            { coursename: 'Physics II', students: '399', date: '16/02/2020', targetaudiance: '11th' },
            { coursename: 'Chemistry I', students: '3299', date: '01/02/2020', targetaudiance: '11th' },
            { coursename: 'Chemistry II', students: '29', date: '03/02/2020', targetaudiance: '12th' },
            { coursename: 'Bio I', students: '9', date: '05/02/2020', targetaudiance: '12th' },
            { coursename: 'Bio II', students: '99', date: '08/02/2020', targetaudiance: '11th' },
            { coursename: 'Math I', students: '243', date: '05/02/2020', targetaudiance: '10th' },
            { coursename: 'Maths II', students: '2499', date: '07/02/2020', targetaudiance: '10th' },
            { coursename: 'Combine', students: '3465', date: '08/02/2020', targetaudiance: '10th' },
            { coursename: '8th', students: '2959', date: '10/02/2020', targetaudiance: '8th' },
            { coursename: '9th', students: '2499', date: '23/02/2020', targetaudiance: '9th' },

        ]

    }
    render() {
        return (
            <div className="fullscreen">
                <div className="container" id="mycourse">
                    <h4>My Courses</h4>
                    <div className="row align-items-center">
                        <Link id="cardadd" to="/newcourse">
                            <Card >
                                <Card.Body>
                                    <Card.Title id="plussign"><i className="far fa-plus-square fa-10x"></i></Card.Title>
                                </Card.Body>
                                <Button
                                    id="cardbutton"
                                    variant="light">
                                    Add New Course
                                </Button>
                            </Card>
                        </Link>

                        {this.state.details.map(course => {
                            return <Card className="shadow bg-white rounded" id="card">
                                <Card.Body>
                                    <Card.Title>{course.coursename}</Card.Title>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Students : {course.students}</ListGroupItem>
                                    <ListGroupItem>Date : {course.date}</ListGroupItem>
                                    <ListGroupItem>Target Audiance : {course.targetaudiance}</ListGroupItem>
                                </ListGroup>

                                <Link to="/coursecontent">
                                    <Button
                                        id="cardbutton"
                                        variant="outline-dark"
                                    >View Details
                                </Button>
                                </Link>
                            </Card>
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default MyCourse;
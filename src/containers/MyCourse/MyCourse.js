import React, { Component } from 'react';
import { Button, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './MyCourse.css';

class MyCourse extends Component {
    state = {
        coursename: 'Physics I',
        students: '299',
        date: '06/02/2020',
        targetaudiance: '8th'
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

                        <Card className="shadow bg-white rounded" id="card">
                            <Card.Body>
                                <Card.Title>{this.state.coursename}</Card.Title>
                            </Card.Body>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Students : {this.state.students}</ListGroupItem>
                                <ListGroupItem>Date : {this.state.date}</ListGroupItem>
                                <ListGroupItem>Target Audiance : {this.state.targetaudiance}</ListGroupItem>
                            </ListGroup>

                            <Link to="/coursecontent">
                                <Button
                                    id="cardbutton"
                                    variant="outline-dark"
                                >View Details
                                </Button>
                            </Link>
                        </Card>

                    </div>
                </div>
            </div >
        )
    }
}

export default MyCourse;
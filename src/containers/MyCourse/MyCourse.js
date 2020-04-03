import React, { Component } from 'react';
import { Button, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';

import './MyCourse.css';

class MyCourse extends Component {
    state = {
        details: []
    }


    componentDidMount() {
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }
        axios.get('/course', config)
            .then(response => {
                this.setState({
                    details: response.data
                })

            })
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
                                    <Card.Title id="plussign">
                                        <i className="far fa-plus-square fa-10x"></i>
                                    </Card.Title>
                                </Card.Body>

                                <Button
                                    id="cardbutton"
                                    variant="light">
                                    Add New Course
                                </Button>
                            </Card>
                        </Link>

                        {this.state.details.map(course => {
                            return <Card id="card" className="shadow bg-white rounded" key={course.course_id}>

                                <Card.Body>
                                    <Card.Title>{course.coursetitle}</Card.Title>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Students : {course.studentsenrolled}</ListGroupItem>
                                    <ListGroupItem>Date : {course.date}</ListGroupItem>
                                    <ListGroupItem>Target Audiance : {course.targetaudience_id}</ListGroupItem>
                                    <ListGroupItem>Subject : {course.subject_id}</ListGroupItem>
                                    <ListGroupItem>Fee : {course.fee}</ListGroupItem>
                                </ListGroup>

                                <Link to={"/coursecontent/" + course.course_id}>
                                    <Button
                                        id="cardbutton"
                                        variant="outline-dark">
                                        View Details
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
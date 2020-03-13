import React, { Component } from 'react';
import { Button, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MyCourse.css';

class MyCourse extends Component {
    state = {
        details: [
            // { coursename: 'Physics I', students: '299', date: '06/02/2020', targetaudiance: '11th', id: '1' },
            // { coursename: 'Physics II', students: '399', date: '16/02/2020', targetaudiance: '11th', id: '2' },
            // { coursename: 'Chemistry I', students: '3299', date: '01/02/2020', targetaudiance: '11th', id: '3' },
            // { coursename: 'Chemistry II', students: '29', date: '03/02/2020', targetaudiance: '12th', id: '4' },
            // { coursename: 'Bio I', students: '9', date: '05/02/2020', targetaudiance: '12th', id: '5' },
            // { coursename: 'Bio II', students: '99', date: '08/02/2020', targetaudiance: '11th', id: '6' },
            // { coursename: 'Math I', students: '243', date: '05/02/2020', targetaudiance: '10th', id: '7' },
            // { coursename: 'Maths II', students: '2499', date: '07/02/2020', targetaudiance: '10th', id: '8' },
            // { coursename: 'Combine', students: '3465', date: '08/02/2020', targetaudiance: '10th', id: '9' },
            // { coursename: '8th', students: '2959', date: '10/02/2020', targetaudiance: '8th', id: '10' },
            // { coursename: '9th', students: '2499', date: '23/02/2020', targetaudiance: '9th', id: '11' },

        ]

    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const updatedDetails = response.data.map(detail => {
                    return {
                        ...detail,
                        students: 546,
                        date: '12 / 03 / 2020',
                        targetaudiance: '9th'
                    }
                })
                this.setState({
                    details: updatedDetails
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
                            return <Card className="shadow bg-white rounded" id="card" key={course.id}>
                                <Card.Body>
                                    <Card.Title>{course.userId}</Card.Title>
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
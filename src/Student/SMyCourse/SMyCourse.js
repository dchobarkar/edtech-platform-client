import React, { Component } from 'react';
import { Button, ListGroupItem, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import axios from '../../../axios-server';

import LoadingSpinner from '../../customFunctions/Spinner/Spinner';
import CModal from '../../customFunctions/CModal/CModal';

import './SMyCourse.css'

class SMyCourse extends Component {
    state = {
        details: [
            {
                coursetitle: 'Maths in 10 days',
                courseintro: 'In this course, you will learn about all the basics of mathematics in just 10 days.',
                targetaudience_id: 1,
                subject_id: 3,
                ratingpoints: 500,
                noofrating: 105
            },
            {
                coursetitle: 'Maths in 20 days',
                courseintro: 'In this course, you will learn about all the basics of mathematics in just 20 days.',
                targetaudience_id: 2,
                subject_id: 3,
                ratingpoints: 536,
                noofrating: 135
            },
            {
                coursetitle: 'Maths in 30 days',
                courseintro: 'In this course, you will learn about all the basics of mathematics in just 30 days.',
                targetaudience_id: 4,
                subject_id: 5,
                ratingpoints: 70,
                noofrating: 15
            },
            {
                coursetitle: 'Maths in 40 days',
                courseintro: 'In this course, you will learn about all the basics of mathematics in just 40 days.',
                targetaudience_id: 6,
                subject_id: 4,
                ratingpoints: 8,
                noofrating: 5
            },
        ],
        loading: false,
        error: false,
        errormsg: null
    }

    // componentDidMount() {
    //     this.setState({ loading: true })
    //     let config = {
    //         headers: {
    //             "Authorization": "Bearer " + localStorage.authKey
    //         }
    //     }
    //     axios.get('/course', config)
    //         .then(response => {
    //             this.setState({
    //                 details: response.data,
    //                 loading: false
    //             })
    //         })
    //         .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    // }

    errorModalHandler = () => {
        this.setState({ error: false })
    }

    ratingHandler = (ratingpoints, noofrating) => {
        const division = ratingpoints / noofrating;
        const rating = division.toFixed(1);
        return rating
    }

    render() {
        let mycoursedetails =
            <>
                {this.state.details.map(course => {
                    return <div id="carddiv" key={course.course_id}>
                        <Card className="shadow bg-white rounded">
                            <Card.Body>
                                <Card.Title>{course.coursetitle}</Card.Title>
                            </Card.Body>

                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Standard : {course.targetaudience_id}</ListGroupItem>
                                <ListGroupItem>Subject : {course.subject_id}</ListGroupItem>
                                <ListGroupItem>Rating : {this.ratingHandler(course.ratingpoints, course.noofrating)}</ListGroupItem>
                            </ListGroup>

                            <Link to={"/student/coursecontent"}>
                                <Button
                                    id="carCButton"
                                    variant="outline-dark">
                                    View Details
                                </Button>
                            </Link>
                        </Card>
                    </div>
                })}
            </>

        if (this.state.loading) {
            mycoursedetails = <LoadingSpinner />
        }

        return (
            <div className="fullscreen">
                <div className="container" id="mycourse">
                    <h4>My Courses</h4>
                    <div className="row align-items-center">

                        {mycoursedetails}

                        {this.state.error ?
                            <CModal show={this.state.error}
                                modalhandler={this.errorModalHandler}>
                                {Array.isArray(this.state.errormsg) ?
                                    <>
                                        {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                                    </>
                                    : < p > {this.state.errormsg}</p>}
                            </CModal> : null}
                    </div>
                </div>
            </div >
        )
    }
}


export default SMyCourse;
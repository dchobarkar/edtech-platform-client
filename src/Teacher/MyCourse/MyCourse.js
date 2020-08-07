import React, { useState, useEffect } from 'react';
import { ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CButton from '../../customFunctions/CButton/CButton';

import './MyCourse.css';

const MyCourse = React.memo(function MyCourse(props) {
    const [myCourseState, setMyCourseState] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // Get all courses for the current user
    useEffect(() => {
        setIsLoading(true)
        axios.get('/course', {
            headers: {
                "Authorization": "Bearer " + localStorage.authKey
            }
        })
            .then(response => {
                setMyCourseState(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [])

    // Calculate avg rating
    const ratingCalculator = (ratingPoint, noOfRating) => {
        let rating = 0;
        if (noOfRating !== 0) {
            rating = (parseFloat(ratingPoint) / parseFloat(noOfRating)).toFixed(1);
        }
        return rating;
    }

    let myCourseList =
        <React.Fragment>
            <Link to="/newcourse" id="mycoursecard" className="no-decoration">
                <Card>
                    <Card.Body>
                        <Card.Title>
                            <i className="far fa-plus-square fa-10x"></i>
                        </Card.Title>
                    </Card.Body>
                    <CButton
                        variant="light">
                        Add New Course
                    </CButton>
                </Card>
            </Link>

            {myCourseState.map(course => (
                <div key={course.course_id} id="mycoursecard">
                    <Card className="shadow bg-white rounded">
                        <Card.Body>
                            <Card.Title>{course.courseTitle}</Card.Title>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Students : {course.studentsEnrolled}</ListGroupItem>
                            <ListGroupItem>Rating :  {ratingCalculator(course.ratingPoing, course.noOfRating)}</ListGroupItem>
                            <ListGroupItem>Target Audiance : {course.targetAudience}</ListGroupItem>
                            <ListGroupItem>Subject : {course.subject}</ListGroupItem>
                            <ListGroupItem>Fee : {course.fee}</ListGroupItem>
                        </ListGroup>

                        <Link to={"/coursecontent/" + course.course_id}>
                            <CButton
                                id="mycoursebutton"
                                variant="light">
                                View Details
                            </CButton>
                        </Link>
                    </Card>
                </div>
            ))}
        </React.Fragment>

    if (isLoading) {
        myCourseList = <Spinner />
    }

    return (
        <div id="mycourse" className="fullscreen container">
            <h4>My Courses</h4>
            <div className="row align-items-center">

                {myCourseList}

            </div>
        </div>
    )
})

export default withErrorHandler(MyCourse, axios);
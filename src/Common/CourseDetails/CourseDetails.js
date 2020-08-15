import React, { useState, useEffect } from 'react';
import { Card, Accordion } from 'react-bootstrap';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CButton from '../../customFunctions/CButton/CButton';
import './CourseDetails.css';

const CourseDetails = React.memo(function CourseDetails(props) {
    // Entire course details state to show data to any user
    const [courseDetails, setCourseDetails] = useState({
        sectionEntitys: [
            {
                lectureEntitys: [],
                examEntitys: []
            }
        ],
    })
    // Loading page variable
    const [isLoading, setIsLoading] = useState(false)
    // Course_id variable
    const course_id = props.match.params.course_id;

    // Get all information for marketing
    useEffect(() => {
        setIsLoading(true)
        axios.get('/browsecourses/' + course_id)
            .then(response => {
                setCourseDetails(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [course_id])

    // Get month at which the course was created
    const getMonth = (created_at) => {
        const date = new Date(created_at);
        const monthIndex = date.getMonth();
        const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        return monthArray[monthIndex];
    };
    // Get the year at which the course was created
    const getYear = (created_at) => {
        const date = new Date(created_at);
        const year = date.getYear() + 1900;
        return year;
    };
    // Calculate the rating of course
    const ratingCalculator = (ratingPoint, noOfRating) => {
        let rating = 0;
        if (noOfRating !== 0) {
            rating = (parseFloat(ratingPoint) / parseFloat(noOfRating)).toFixed(1);
            return rating;
        }
    }

    let courseDetailsPage =
        <React.Fragment>
            <div className="coursedetails container">

                <p className="subject">
                    {courseDetails.subject}
                    <span>{getMonth(courseDetails.created_at)} / {getYear(courseDetails.created_at)}</span>
                </p>

                <h1 className="coursetitle">{courseDetails.courseTitle}</h1>

                <p className="targetaudience">For students of {courseDetails.targetAudience}</p>

                <p className="createdby">Designed by {courseDetails.className}</p>

                <div className="clearfix">
                    <CButton
                        className="float-right"
                        variant="outline-primary">
                        Enroll Now
                    </CButton>
                </div>

                <div className="bottominfo row align-items-center">
                    <span><i className='fa fa-heart animated infinite pulse' />{' '}{ratingCalculator(courseDetails.ratingPoint, courseDetails.noOfRating)} ({courseDetails.noOfRating} ratings)</span>
                    <span><i className="fas fa-user-graduate" />  {courseDetails.studentsEnrolled}</span>
                    <span><i className="fas fa-rupee-sign"></i> {courseDetails.fee}</span>
                </div>

            </div>

            <div className="courseintro">

                <h5><i className="far fa-question-circle" />  Course Introduction</h5>

                <p>{courseDetails.courseIntro}</p>

            </div>

            <div className="sectiondetailstable">

                <h3>Course Details</h3>

                <Accordion>
                    {courseDetails.sectionEntitys.map((sectionEntity, Index) => (
                        <Card key={Index}>

                            <Card.Header>
                                <Accordion.Toggle
                                    as={Card.Header}
                                    variant="link"
                                    eventKey={Index + 1}>
                                    <p>
                                        <span>
                                            <i className="fas fa-layer-group"></i>
                                            {' '}{sectionEntity.sectionTitle}
                                        </span>
                                        <span className="right">
                                            {sectionEntity.examEntitys.length !== 0 ?
                                                (<React.Fragment><i className="fas fa-university" /> Exams : {sectionEntity.examEntitys.length}      </React.Fragment>)
                                                : null
                                            }<i className="far fa-clipboard" /> Lectures : {sectionEntity.lectureEntitys.length}
                                        </span>
                                    </p>
                                </Accordion.Toggle>
                            </Card.Header>

                            <Accordion.Collapse eventKey={Index + 1}>
                                <React.Fragment>
                                    {sectionEntity.lectureEntitys.map((lectureEntity, Index) => (
                                        <Card.Body key={Index}>
                                            <i className="far fa-play-circle" />  {lectureEntity.lectureTitle}
                                        </Card.Body>
                                    ))}

                                    {sectionEntity.examEntitys.map((examEntity, Index) => (
                                        <Card.Body key={Index}>
                                            <span>
                                                <i className="fas fa-question" /> {examEntity.examTitle}
                                            </span>
                                            <span className="right">
                                                <i className="far fa-clock" /> {examEntity.duration} min. Total Questions : {examEntity.questionNo}
                                            </span>
                                        </Card.Body>
                                    ))}
                                </React.Fragment>
                            </Accordion.Collapse>
                        </Card>
                    ))}
                </Accordion>
            </div>

            <div className="classintro container">
                <h2>Class Introduction</h2>
                <h5>{courseDetails.className}</h5>
                <p>{courseDetails.classIntro}</p>
            </div>
        </React.Fragment>
    if (isLoading) {
        courseDetailsPage = <Spinner />
    }

    return (
        <div id="browsecoursedetails" className="fullscreen container">
            <div className="row align-items-center align-middle">

                {courseDetailsPage}
            </div>
        </div>
    )
})

export default withErrorHandler(CourseDetails, axios);
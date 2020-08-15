import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';

import './BrowseCourses.css';

const BrowseCourses = React.memo(function BrowseCourses(props) {
    // List of all courses to browse
    const [browseCourses, setBrowseCourses] = useState([])
    // Loading page state
    const [isLoading, setIsLoading] = useState(false)

    // Get all courses
    useEffect(() => {
        setIsLoading(true)
        axios.get("/browsecourses")
            .then(response => {
                setBrowseCourses(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [])

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
        }
        return rating;
    }

    let browseCoursesPage =
        <React.Fragment>
            {browseCourses.map((course, Index) => (
                <Link key={Index} to={"/browsecourses/coursedetails/" + course.course_id} className="no-decoration browsecourselink">
                    <div className="browsecourse">

                        <div className="background-img">
                            <div className="createdat">
                                <div className="month">{getMonth(course.created_at)}</div>
                                <div className="year">{getYear(course.created_at)}</div>
                            </div>
                            <img src={require("../../assets/IMG/BrowseCourse_Background.jpg")} alt="" />
                        </div>

                        <div className="course-content">
                            <div className="classname">{course.className}</div>
                            <h1 className="coursesubject">{course.subject}</h1>
                            <h2 className="coursetitle">{course.courseTitle}</h2>
                            <p className="courseintro">{course.courseIntro}</p>

                            <div className="meta-data">
                                <span className="rating">
                                    <i className='fa fa-heart animated infinite pulse' />
                                    {' '}{ratingCalculator(course.ratingPoint, course.noOfRating)}
                                </span>
                                <span className="studentsenrolled">
                                    <i className="fas fa-user-graduate" />
                                    {' '}{course.studentsEnrolled}
                                </span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </React.Fragment>

    if (isLoading) {
        browseCoursesPage = <Spinner />
    }

    return (
        <div id="browsecourses" className="fullscreen container">
            <div className="row align-items-center align-middle">
                {browseCoursesPage}
            </div>
        </div>
    )
})

export default withErrorHandler(BrowseCourses, axios);
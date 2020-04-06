import React, { Component } from 'react';
import { Button, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios-server';

import LoadingSpinner from '../../components/Spinner/Spinner';
import DModal from '../../components/DModal/DModal'

import './MyCourse.css';

class MyCourse extends Component {
    state = {
        details: [],
        loading: false,
        error: false,
        errormsg: null
    }

    componentDidMount() {
        this.setState({ loading: true })
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }
        axios.get('/course', config)
            .then(response => {
                this.setState({
                    details: response.data,
                    loading: false
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }

    render() {
        let mycoursedetails =
            <>
                <Link id="carddiv" to="/newcourse">
                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <i className="far fa-plus-square fa-10x"></i>
                            </Card.Title>
                        </Card.Body>

                        <Button
                            variant="light">
                            Add New Course
                        </Button>
                    </Card>
                </Link>

                {this.state.details.map(course => {
                    return <div id="carddiv" key={course.course_id}>
                        <Card className="shadow bg-white rounded">
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
                            <DModal show={this.state.error}
                                modalhandler={this.errorModalHandler}>
                                {Array.isArray(this.state.errormsg) ?
                                    <>
                                        {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                                    </>
                                    : < p > {this.state.errormsg}</p>}
                            </DModal> : null}
                    </div>
                </div>
            </div >
        )
    }
}

export default MyCourse;
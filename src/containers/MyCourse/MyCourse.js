import React, { Component } from 'react';
import { Button, ListGroupItem, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyCourse.css';

class MyCourse extends Component {
    render() {
        return (
            <div className="container top-space" id="fullscreen" >
                <h4>My Courses</h4>
                <div className="row">
                    <Link to="/newcourse">
                        <Card id="card">
                            <Card.Body>
                                <Card.Title>
                                    Add New Course
                            </Card.Title>
                            </Card.Body>

                            {/* <Button variant="primary"><Link to="/testdetails">View Details</Link></Button> */}
                        </Card>
                    </Link>

                    <Card id="card">
                        <Card.Body>
                            <Card.Title>
                                {/* {{ ...this.state.mytests }} */}
                                asgsgsg
                            </Card.Title>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Students : </ListGroupItem>
                            <ListGroupItem>Date : </ListGroupItem>
                            <ListGroupItem>Status : </ListGroupItem>
                        </ListGroup>

                        <Button variant="primary"><Link to="/coursecontent">View Details</Link></Button>
                    </Card>


                </div>
            </div>
        )
    }
}

export default MyCourse;
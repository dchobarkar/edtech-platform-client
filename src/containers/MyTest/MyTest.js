import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './MyTest.css';

class MyTest extends Component {
    state = {
        mytests: [
            { title: 'Phy I', stdno: '345', date: '24/02/2020', status: 'Completed' },
            { title: 'Math IV', stdno: '246', date: '25/02/2020', status: 'Sheduled' },
            { title: 'Bio III', stdno: '362', date: '26/02/2020', status: 'Sheduled' },
            { title: 'Chem II', stdno: '856', date: '27/02/2020', status: 'Sheduled' },
            { title: 'Chem I', stdno: '2363', date: '28/02/2020', status: 'Sheduled' },
            { title: 'Phy II', stdno: '2375', date: '29/02/2020', status: 'Sheduled' },
        ]

    }



    render() {
        return (
            <div className="container">
                <h4>My Tests</h4>
                <div className="row">
                    {this.state.mytests.map(mytest => {
                        return (
                            <Card id="card">
                                <Card.Body>
                                    <Card.Title>{mytest.title}</Card.Title>
                                </Card.Body>

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>Students : {mytest.stdno}</ListGroupItem>
                                    <ListGroupItem>Date : {mytest.date}</ListGroupItem>
                                    <ListGroupItem>Status : {mytest.status}</ListGroupItem>
                                </ListGroup>

                                <Button variant="primary">View Details</Button>
                            </Card>
                        )
                    })}
                </div>
            </div>
        )
    }
};

export default MyTest;
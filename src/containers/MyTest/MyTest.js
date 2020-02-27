import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './MyTest.css';

class MyTest extends Component {
    render() {
        return (
            <div className="container top-space" id="fullscreen" >
                <h4>My Tests</h4>
                <div className="row">
                    <Card id="card">
                        <Card.Body>
                            <Card.Title>{this.props.mytest[0].testinitials.testtitle}</Card.Title>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Students : {this.props.mytest[0].testinitials.suscribed}</ListGroupItem>
                            <ListGroupItem>Date : {this.props.mytest[0].testinitials.sheduled}</ListGroupItem>
                            <ListGroupItem>Status : </ListGroupItem>
                        </ListGroup>

                        <Button variant="primary"><Link to="/testdetails">View Details</Link></Button>
                    </Card>

                    <Card id="card">
                        <Card.Body>
                            <Card.Title>{this.props.mytest[1].testinitials.testtitle}</Card.Title>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Students : {this.props.mytest[1].testinitials.suscribed}</ListGroupItem>
                            <ListGroupItem>Date : {this.props.mytest[1].testinitials.sheduled}</ListGroupItem>
                            <ListGroupItem>Status : </ListGroupItem>
                        </ListGroup>

                        <Button variant="primary"><Link to="/testdetails">View Details</Link></Button>
                    </Card>
                </div>
            </div>
        )
    }
};


const mapStateToProps = state => {
    return {
        mytest: state.mytests
    };
};

export default connect(mapStateToProps)(MyTest);
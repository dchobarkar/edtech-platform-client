import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './MyTest.css';
import { Link } from 'react-router-dom';
import reducer from '../../redux/reducer';
import store from '../../redux/store';

class MyTest extends Component {

    render() {
        return (

            <div className="container">
                <h4>My Tests</h4>
                <div className="row">
                    <Card id="card">
                        <Card.Body>
                            <Card.Title>{store.getState().mytests[0].testtitle}</Card.Title>
                        </Card.Body>

                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Students : {store.getState().mytests[0].suscribed}</ListGroupItem>
                            <ListGroupItem>Date : {store.getState().mytests[0].sheduled}</ListGroupItem>
                            {/* <ListGroupItem>Status : {mytest.status}</ListGroupItem> */}
                        </ListGroup>

                        <Button variant="primary"><Link to="/testdetails">View Details</Link></Button>
                    </Card>
                </div>
            </div>


            // <div className="container">
            //     <h4>My Tests</h4>
            //     <div className="row">
            //         {this.state.mytests.map(mytest => {
            //             return (
            //                 <Card id="card">
            //                     <Card.Body>
            //                         <Card.Title>{mytest.title}</Card.Title>
            //                     </Card.Body>

            //                     <ListGroup className="list-group-flush">
            //                         <ListGroupItem>Students : {mytest.stdno}</ListGroupItem>
            //                         <ListGroupItem>Date : {mytest.date}</ListGroupItem>
            //                         <ListGroupItem>Status : {mytest.status}</ListGroupItem>
            //                     </ListGroup>

            //                     <Button variant="primary"><Link to="/testdetails">View Details</Link></Button>
            //                 </Card>
            //             )
            //         })}
            //     </div>
            // </div>
        )
    }
};

export default MyTest;
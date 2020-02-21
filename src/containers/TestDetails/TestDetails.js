import React, { Component } from 'react';
import { Button } from "react-bootstrap";


class TestDetails extends Component {
    state = {
        title: 'Phy I',
        stdno: '3462',
        maxmark: '110',
        queno: '30'

    }


    render() {
        return (
            <div className="container">
                <h4>Test Details</h4>
                <div className="row shadow p-3 mb-5 bg-white rounded">
                    <div className="col-sm-3">
                        <h6>Test Title :</h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.state.title}</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Students Appeared : </h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.state.stdno}</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Maximum Marks :</h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.state.maxmark}</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Number of Questions :</h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.state.queno}</p>
                    </div>
                    <Button> View Questions</Button>
                </div>
            </div>
        )
    }
}

export default TestDetails;
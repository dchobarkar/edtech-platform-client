import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import './TestDetails.css';


class TestDetails extends Component {

    render() {
        return (
            <div className="container" id="fullscreen">
                <h4>Test Details</h4>
                <div className="row shadow p-3 mb-5 bg-white rounded">
                    <div className="col-sm-3">
                        <h6>Test Title :</h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.props.test[0].testinitials.testtitle}</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Students Appeared : </h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.props.test[0].testinitials.suscribed}</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Instructions :</h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.props.test[0].testinitials.instructions}</p>
                    </div>
                    <div className="col-sm-3">
                        <h6>Target Audience :</h6>
                    </div>
                    <div className="col-sm-9">
                        <p>{this.props.test[0].testinitials.targetaudience}</p>
                    </div>
                    <Link to="/NewQuestion">
                        <Button> View Questions</Button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        test: state.mytests
    }
}

export default connect(mapStateToProps)(TestDetails);
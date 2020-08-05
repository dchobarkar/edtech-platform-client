import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './SCourseDetails.css';

class SCourseInfo extends Component {
    state = {
        showcoursedetails: false,
    }

    showCourseDetailsHandler = () => {
        this.setState({
            showcoursedetails: !this.state.showcoursedetails,
        })
    }

    render() {
        return (
            <div>
                <Button
                    variant="light"
                    onClick={this.showCourseDetailsHandler}>
                    <i className="fas fa-info-circle"></i> Course Description
                </Button>

                {this.state.showcoursedetails ?
                    <div id="courseinfobox">
                        <p>coursetitle: {this.props.coursetitle}</p>
                        <p>Standard: {this.props.targetaudience_id}</p>
                        <p>Subject: {this.props.subject_id}</p>
                        <p>Course Introduction: {this.props.courseintro}</p>
                        <p>Fee: {this.props.fee}</p>

                    </div> : null}
            </div>
        )
    }
}

export default SCourseInfo;
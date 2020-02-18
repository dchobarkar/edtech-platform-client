import React, { Component } from 'react';

class TestDetails extends Component {
    render() {
        return (
            <div>
                <h1>Test Details</h1>
                <div>
                    <h4>Test Name</h4>
                    <p>No of questions</p>
                    <p>Students Appeared : testid.studentnumber</p>
                    <p>Highest Marks : testid.highestmarks</p>
                    <button> View Questions</button>
                </div>
            </div>
        )
    }
}

export default TestDetails;
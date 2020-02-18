import React, { Component } from 'react';
import './MyTest.css'

class MyTest extends Component {
    render() {
        return (
            <div id="MyTest">
                <span></span>
                <h1>My Tests</h1>
                <div id ="MyTestBox">
                    <h4>Physics I</h4>
                    <h6>Completed</h6>
                    <button> Details</button>
                </div>
                <div id ="MyTestBox">
                    <h4>Physics II</h4>
                    <h6>Completed</h6>
                    <button> Details</button>
                </div>
                <div id ="MyTestBox">
                    <h4>Chem I</h4>
                    <h6>Completed</h6>
                    <button> Details</button>
                </div>
                <div id ="MyTestBox">
                    <h4>Chem II</h4>
                    <h6>Completed</h6>
                    <button> Details</button>
                </div>
            </div>
        )
    }
};

export default MyTest;
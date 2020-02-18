import React, { Component } from 'react';
import './NewTest.css'
import {Button} from 'react-bootstrap';


class NewTest extends Component {
    render() {
        return (
            <div>
                <h1>New Test Setup</h1>
                <label>Name of the Test :</label>
                <input type="text"></input>
                <label>Instructions</label>
                <input type="textarea"></input>
                <label>No. of Questions</label>
                <input type="text"></input>
                <button >Submit</button>
                <hr/>

                <div>
                    <label>Question</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>Image</label>
                    <input type="file" alt="img.imagename"></input>
                </div>
                <div>
                    <label>Option 1</label>
                    <input type="I"></input>
                </div>

                <div>
                    <label>Option 2</label>
                    <input type="II"></input>
                </div>
                <div>
                    <label>Option 3</label>
                    <input type="III"></input>
                </div>
                <div>
                    <label>Option 4</label>
                    <input type="IV"></input>
                </div>
                <button>Back</button>
                <button>Next</button>


            </div>
        );
    }
}

export default NewTest;
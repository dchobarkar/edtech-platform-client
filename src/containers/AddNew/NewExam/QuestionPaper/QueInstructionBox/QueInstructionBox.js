import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './QueInstructionBox.css'

class QueInstructionBox extends Component {

    state = {
        showinstruction: false,
        showedit: false,
        instructions: this.props.instructions
    }

    showDescriptionHandler = () => {
        this.setState({
            showinstruction: !this.state.showinstruction,
            showedit: false
        })
    }

    showEditHandler = () => {
        this.setState({
            showedit: !this.state.showedit
        })
    }
    instructionEditHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    ShowInstruction = () => (
        < div id="examinstruction" >
            <div className="row">
                <Button
                    onClick={this.showEditHandler}
                    variant="light">
                    <i className="far fa-edit"></i>
                </Button>
                <p align="justify">{this.state.instructions}</p>
            </div>
        </div >
    )

    EditInstruction = () => (
        <div id="examinstructionedit">
            <Form>
                <Form.Group>
                    <Form.Control
                        id="noborder"
                        as="textarea"
                        rows="4"
                        value={this.state.instructions}
                        name="instructions"
                        onChange={this.instructionEditHandler} />
                </Form.Group>
            </Form>

            <Button
                onClick={() => this.props.saveEditInstruction(this.state.instructions)}
                variant="light">
                <i className="far fa-save"></i> Save
            </Button>
        </div>
    )

    render() {

        let content = null
        this.state.showedit ? content = <this.EditInstruction /> : content = <this.ShowInstruction />


        return (
            <div className="container" >
                <div className="row" id="showexaminstructionsbutton">
                    <h6>Preview</h6>
                    <Button
                        onClick={this.showDescriptionHandler}
                        variant="light">
                        <i className="fas fa-book"></i>
                        Instructions
                    </Button>
                </div>
                {this.state.showinstruction ? content : null}


            </div >
        )
    }
}

export default QueInstructionBox;
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './QueInstructionBox.css';

class QueInstructionBox extends Component {
    state = {
        examname: this.props.examname,
        instructions: this.props.instructions,
        show: false,
        edit: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showExamInfoHandler = () => {
        this.setState({
            show: !this.state.show,
            edit: false
        })
    }
    showEditHandler = () => {
        this.setState({
            edit: !this.state.edit
        })
    }

    inputClearer = () => {
        this.setState({
            show: !this.state.show,
            edit: !this.state.edit,
            examname: this.props.examname,
            instructions: this.props.instructions
        })
    }

    saveeditinfo = () => {
        this.props.editexam(this.state.examname, this.state.instructions);
        this.showExamInfoHandler();
    }

    render() {
        let disable = null;
        this.state.edit ? disable = false : disable = true;

        return (
            <div className="container" >
                <div className="row" id="showexaminstructionsbutton">
                    <Button
                        variant="light"
                        onClick={this.showExamInfoHandler}>
                        <i className="fas fa-info-circle"></i>
                        Instructions
                    </Button>
                </div>

                {this.state.show ?
                    <div className="row" id="examinstructionedit">
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    disabled={disable}
                                    id="noborder"
                                    type="text"
                                    name="examname"
                                    value={this.state.examname}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    disabled={disable}
                                    id="noborder"
                                    as="textarea"
                                    rows="4"
                                    name="instructions"
                                    value={this.state.instructions}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>
                        </Form>

                        {this.state.edit ? null :
                            <Button
                                variant="light"
                                onClick={this.showEditHandler}>
                                <i className="far fa-edit"></i>
                                Edit
                            </Button>}

                        {this.state.edit ?
                            <div>
                                <Button
                                    variant="light"
                                    onClick={this.saveeditinfo}>
                                    <i className="far fa-save"></i>
                                    Save
                                </Button>
                                <Button
                                    variant="light"
                                    onClick={this.inputClearer}>
                                    Discard Changes
                                </Button>
                            </div> : null}

                    </div > : null}
            </div >
        )
    }
}

export default QueInstructionBox;
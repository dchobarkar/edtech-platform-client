import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

import './QueInstructionBox.css';

class QueInstructionBox extends Component {
    state = {
        examtitle: this.props.examtitle,
        examinstruction: this.props.examinstruction,
        duration: this.props.duration,
        show: false,
        edit: false
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    showExamDetailsHandler = () => {
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
            examtitle: this.props.examtitle,
            examinstruction: this.props.examinstruction,
            duration: this.props.duration,
        })
    }

    updateExamHandler = (e) => {
        this.props.updateexamhandler(e, this.state.examtitle, this.state.examinstruction, this.state.duration);
        this.showExamDetailsHandler();
    }

    render() {
        let disable = null;
        this.state.edit ? disable = false : disable = true;

        return (
            <div className="container" >
                <div className="row" id="showexaminstructionsbutton">
                    <Button
                        variant="light"
                        onClick={this.showExamDetailsHandler}>
                        <i className="fas fa-info-circle"></i> Instructions
                    </Button>
                </div>

                {this.state.show ?
                    <div className="row" id="examinstructionedit">
                        <Form onSubmit={(e) => this.updateExamHandler(e)}>
                            <Form.Group className="inputfield">
                                <Form.Control
                                    disabled={disable}
                                    required
                                    title="Please enter a valid exam title."
                                    pattern="^[\w\s]{0,100}$"
                                    type="text"
                                    name="examtitle"
                                    value={this.state.examtitle}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Group className="inputfield">
                                <Form.Control
                                    disabled={disable}
                                    as="textarea"
                                    rows="4"
                                    name="examinstruction"
                                    value={this.state.examinstruction}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            <Form.Group className="inputfield">
                                <Form.Control
                                    disabled={disable}
                                    required
                                    title="Please enter the duration of exam."
                                    pattern="^[0-9]+$"
                                    type="number"
                                    name="duration"
                                    value={this.state.duration}
                                    onChange={this.inputChangeHandler} />
                            </Form.Group>

                            {this.state.edit ? null :
                                <Button
                                    variant="light"
                                    onClick={this.showEditHandler}>
                                    <i className="far fa-edit"></i> Edit
                            </Button>}

                            {this.state.edit ?
                                <div>
                                    <Button
                                        variant="light"
                                        type="submit">
                                        <i className="far fa-save"></i> Save
                                </Button>

                                    <Button
                                        variant="light"
                                        onClick={this.inputClearer}>
                                        Discard Changes
                                </Button>
                                </div> : null}
                        </Form>
                    </div > : null}

            </div >
        )
    }
}

export default QueInstructionBox;
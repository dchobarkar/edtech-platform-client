import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './NewQuestion.css'

import * as actions from '../../store/actions/actionTypes';

class NewQuestion extends Component {
    state = {
        que: '',
        fig: '',
        opt1: '',
        opt2: '',
        opt3: '',
        opt4: ''
    }

    questionHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    newQuestionAdder = () => {
        console.log(this.state)
    }

    render() {
        return (
            <div className="fullscreen">
                <section id="addnewquestion">
                    <div className="container">
                        <div className="row">
                            <Form
                                onSubmit={() => this.props.newquestionregister(this.state)}
                                className="shadow p-3 mb-5 bg-white rounded">
                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Question
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            id="noborder"
                                            as="textarea"
                                            rows="2"
                                            value={this.state.que}
                                            name="que"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Figure
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="file"
                                            name="fig"
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Option 1
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            value={this.state.opt1}
                                            name="opt1"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Option 2
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            value={this.state.opt2}
                                            name="opt2"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Option 3
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            value={this.state.opt3}
                                            name="opt3"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row}>
                                    <Form.Label column sm={2}>
                                        Option 4
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            id="noborder"
                                            type="text"
                                            value={this.state.opt4}
                                            name="opt4"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div >
                    </div>
                </section>

                <section id="questionnoscroll">
                    <div className="container">
                        <div className="row">
                            <div id="questionbutton">
                                <Button
                                    className="float-right"
                                    onClick={this.newQuestionAdder}
                                    variant="outline-dark"
                                >Submit
                            </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => {
    return {
        newquestionregister: (newque) => dispatch({
            type: actions.NEWQUESTIONREGISTER, value: { newque }
        })
    }
}

export default connect(null, mapDispatchToProps)(NewQuestion);
import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './NewQuestion.css'

import * as actions from '../../../store/actions/actionTypes';

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

    render() {
        return (
            <div>
                <section id="addnewquestion">
                    <div className="container">
                        <div className="row">
                            <Form onSubmit={() => this.props.newquestionregister(this.state)} className="shadow p-3 mb-5 bg-white rounded">
                                <Form.Group as={Row} controlId="question">
                                    <Form.Label column sm={2}>
                                        Question
                                </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            as="textarea"
                                            rows="2"
                                            placeholder="Question"
                                            name="que"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="questionimage">
                                    <Form.Label column sm={2}>
                                        Figure
                        </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="file"
                                            name="fig"
                                        // onChange={this.questionHandler} 
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="opt1">
                                    <Form.Label column sm={2}>
                                        Option 1
                        </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Option 1"
                                            name="opt1"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="opt2">
                                    <Form.Label column sm={2}>
                                        Option 2
                        </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Option 2"
                                            name="opt2"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="opt3">
                                    <Form.Label column sm={2}>
                                        Option 3
                        </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Option 3"
                                            name="opt3"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} controlId="opt4">
                                    <Form.Label column sm={2}>
                                        Option 4
                        </Form.Label>
                                    <Col sm={10}>
                                        <Form.Control
                                            type="text"
                                            placeholder="Option 4"
                                            name="opt4"
                                            onChange={this.questionHandler} />
                                    </Col>
                                </Form.Group>

                                {/* <Form.Row>
                                    <Form.Group as={Col}>
                                        <Col sm={{ span: 10, offset: 4 }}>
                                            <Button
                                                type="submit"
                                            >Previous</Button>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Col sm={{ span: 10, offset: 2 }}>
                                            <Button
                                                type="submit">Next</Button>
                                        </Col>
                                    </Form.Group>
                                </Form.Row> */}
                            </Form>
                            <div className="row">
                                <div class="pagination">
                                    <a href="#">&laquo;</a>
                                    <a href="#" class="active">1</a>
                                    <a href="#" >2</a>
                                    <a href="#">3</a>
                                    <a href="#">4</a>
                                    <a href="#">5</a>
                                    <a href="#">6</a>
                                    <a href="#">7</a>
                                    <a href="#">8</a>
                                    <a href="#">9</a>
                                    <a href="#">10</a>
                                    <a href="#">&raquo;</a>
                                </div>

                            </div>
                            <Form>

                                <Form.Group id="right">
                                    <Col sm={{ span: 10, offset: 2 }}>
                                        <Button

                                            type="submit">Submit</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div >
                    </div>
                </section>

                <section id="questionnoscroll">
                    <div className="container">

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
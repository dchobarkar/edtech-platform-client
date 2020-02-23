import React, { Component } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

class NewQuestion extends Component {
    state = {
        questions: [
            { que: '', fig: '', opt1: '', opt2: '', opt3: '', opt4: '' },
        ]
    }

    questionhandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    question = () => {
        alert(this.state.que + '+' + this.state.fig + '+' + this.state.opt1 + '+' + this.state.opt2 + '+' + this.state.opt3 + '+' + this.state.opt4)
    }

    render() {
        return (
            <div className="container">
                <div className="">
                    <Form onClick={this.showquestion} className="shadow p-3 mb-5 bg-white rounded">
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
                                    onChange={this.questionhandler} />
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
                                    onChange={this.questionhandler} />
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
                                    onChange={this.questionhandler} />
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
                                    onChange={this.questionhandler} />
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
                                    onChange={this.questionhandler} />
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
                                    onChange={this.questionhandler} />
                            </Col>
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col}>
                                <Col sm={{ span: 10, offset: 4 }}>
                                    <Button
                                        type="submit"
                                    >testid.previous</Button>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Col}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button
                                        onClick={this.question}
                                        type="submit">testid.next</Button>
                                </Col>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </div>
            </div>
        )
    }

}

export default NewQuestion;
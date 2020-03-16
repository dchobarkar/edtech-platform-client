import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewChapter extends Component {
    state = {
        chaptername: '',
        description: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    inputClearer = () => {
        this.props.newchaptersubmit(this.state.chaptername, this.state.description);
        this.setState({
            chaptername: '',
            description: ''
        });
        this.props.closetab('Chapter');
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>{this.state.chaptername}</p>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Chapter Name</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        name="chaptername"
                                        value={this.state.chaptername}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>Description</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        as="textarea"
                                        rows="2"
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Button
                                className="float-right"
                                variant="outline-dark"
                                onClick={this.inputClearer}>
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewChapter;
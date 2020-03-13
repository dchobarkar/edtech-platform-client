import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewChapter extends Component {
    state = {

    }
    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>Title</p>
                        <Form>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Chapter Name
                        </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        type="text"
                                        placeholder="Chapter"
                                        name="chaptername"
                                        onChange={this.inputChangeHandler}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row}>
                                <Form.Label column sm={2}>
                                    Description
                        </Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        id="noborder"
                                        as="textarea"
                                        rows="2"
                                        placeholder="Description"
                                        name="description"
                                        onChange={this.inputChangeHandler}
                                    />
                                </Col>
                            </Form.Group>
                            <Button
                                onClick={() => this.props.newchaptersubmit(this.state.chaptername, this.state.description)}
                                className="float-right"
                                variant="outline-dark">Add
                        </Button>
                        </Form>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewChapter;
import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

class NewSection extends Component {
    state = {
        sectiontitle: '',
        sectionintro: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    newSectionHandler = (e) => {
        this.props.newsectionhandler(e, this.state.sectiontitle, this.state.sectionintro);
        this.setState({
            sectiontitle: '',
            sectionintro: ''
        });
        this.props.closetab('Section');
    }

    render() {
        return (
            <section id="addnew">
                <div className="container">
                    <div className="row">
                        <p>{this.state.sectiontitle}</p>
                        <Form onSubmit={(e) => this.newSectionHandler(e)}>
                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Section Title</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        required
                                        title="Please enter a valid title."
                                        pattern="^[\w\s]{0,100}$"
                                        type="text"
                                        name="sectiontitle"
                                        value={this.state.sectiontitle}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="inputfield">
                                <Form.Label column sm={2}>Section Description</Form.Label>
                                <Col sm={10}>
                                    <Form.Control
                                        as="textarea"
                                        rows="2"
                                        name="sectionintro"
                                        value={this.state.sectionintro}
                                        onChange={this.inputChangeHandler} />
                                </Col>
                            </Form.Group>

                            <Button
                                className="float-right"
                                variant="outline-dark"
                                type="submit">
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        )
    }
}

export default NewSection;
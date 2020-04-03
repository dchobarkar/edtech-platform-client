import React, { Component } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';

class EditModal extends Component {
    state = {
        title: this.props.title,
        description: this.props.description,
        lecturevideo: this.props.lecturevideo
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    discardChangeHandler = () => {
        this.setState({
            title: this.props.title,
            description: this.props.description,
            lecturevideo: this.props.lecturevideo
        });
        this.props.showeditmodal();
    }

    LectureVideo = () => (
        <Form.Group as={Row}>
            <Form.Label column sm={2}>Video</Form.Label>
            <Col sm={10}>
                <Form.Control
                    type="file"
                    name="lecturevideo" />
            </Col>
        </Form.Group>
    )

    render() {
        return (
            <Modal centered
                show={this.props.show}
                onHide={this.discardChangeHandler}>
                <Modal.Header closeButton></Modal.Header>

                <Modal.Body >
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Title</Form.Label>
                            <Col sm={10}>
                                <Form.Control
                                    id="noborder"
                                    type="text"
                                    name="title"
                                    value={this.state.title}
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

                        {this.props.sectionid ? <this.LectureVideo /> : null}
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant="outline-dark"
                        onClick={this.discardChangeHandler}>
                        Discard Changes
                    </Button>

                    <Button
                        variant="outline-dark"
                        onClick={() => this.props.updatecontenthandler(this.props.sectionid, this.props.contentid, this.state.title, this.state.description, this.state.lecturevideo)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal >
        )
    }
}

export default EditModal;
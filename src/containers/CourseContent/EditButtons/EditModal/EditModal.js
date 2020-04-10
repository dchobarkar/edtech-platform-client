import React, { Component } from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';

import DModal from '../../../../components/DModal/DModal';

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
        <Form.Group as={Row} className="inputfield">
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
            <DModal
                show={this.props.show}
                modalhandler={this.discardChangeHandler}>
                <Form onSubmit={(e) => this.props.updatecontenthandler(e, this.props.sectionid, this.props.contentid, this.state.title, this.state.description, this.state.lecturevideo)}>
                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Title</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                required
                                title="Please enter a valid title."
                                pattern="^[\w\s]{0,100}$"
                                type="text"
                                name="title"
                                value={this.state.title}
                                onChange={this.inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Description</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                as="textarea"
                                rows="2"
                                name="description"
                                value={this.state.description}
                                onChange={this.inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    {this.props.sectionid ? <this.LectureVideo /> : null}

                    <Button
                        variant="outline-dark"
                        onClick={this.discardChangeHandler}>
                        Discard Changes
                    </Button>

                    <Button
                        className="float-right"
                        variant="outline-dark"
                        type="submit">
                        Save
                    </Button>
                </Form>
            </DModal >
        )
    }
}

export default EditModal;
import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CModal from '../../../../customFunctions/CModal/CModal';
import CButton from '../../../../customFunctions/CButton/CButton';

const EditModal = React.memo(function EditModal(props) {
    const [editState, setEditState] = useState({
        title: props.title,
        description: props.description,
    })

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditState(editState => ({
            ...editState,
            [name]: value
        }))
    }
    const fileInputHandler = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        setEditState(editState => ({
            ...editState,
            [name]: file
        }))
    }

    const inputClearer = () => {
        setEditState(editState => ({
            ...editState,
            title: props.title,
            description: props.description
        }))
        props.showEditModal();
    }

    // Call back to the update content handler in EditButtons
    const updateContentHandler = (e, title, description, lectureVideo) => {
        props.updateContentHandler(e, props.section_id, props.content_id, title, description, lectureVideo)
        props.showEditModal()
    }

    return (
        <CModal
            show={props.show}
            onHide={inputClearer}>
            <Form onSubmit={(e) => updateContentHandler(e, editState.title, editState.description, editState.lectureVideo)}>
                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Title</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            name="title"
                            type="text"
                            value={editState.title}
                            required
                            pattern="^[\w\s]{0,100}$"
                            title="Please enter a valid title."
                            onChange={inputChangeHandler} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row}>
                    <Form.Label column sm={2}>Description</Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            name="description"
                            as="textarea"
                            rows="2"
                            value={editState.description}
                            onChange={inputChangeHandler} />
                    </Col>
                </Form.Group>

                {props.section_id ?
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Video</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="lectureVideo"
                                type="file"
                                onChange={fileInputHandler} />
                        </Col>
                    </Form.Group>
                    : null
                }

                <CButton
                    variant="outline-dark"
                    onClick={inputClearer}>
                    Discard Changes
                </CButton>

                <CButton
                    type="submit"
                    className="float-right"
                    variant="outline-dark">
                    Save
                </CButton>
            </Form>
        </CModal >
    )
})

export default EditModal;
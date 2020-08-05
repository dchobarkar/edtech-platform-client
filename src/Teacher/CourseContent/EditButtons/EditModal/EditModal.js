import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CModal from '../../../../customFunctions/CModal/CModal';
import CButton from '../../../../customFunctions/CButton/CButton';

const EditModal = React.memo(function EditModal(props) {
    const [editState, setEditState] = useState({
        title: '',
        description: ''
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

    const inputClearerHandler = () => {
        setEditState({
            ...props
        })
        props.showEditModal();
    }

    const LectureVideo = () => (
        <Form.Group as={Row} className="inputfield">
            <Form.Label column sm={2}>Video</Form.Label>
            <Col sm={10}>
                <Form.Control
                    name="lectureVideo"
                    type="file"
                    onChange={fileInputHandler} />
            </Col>
        </Form.Group>
    )

    return (
        <CModal
            show={props.show}
            modalHandler={inputClearerHandler}>
            <Form onSubmit={(e) => props.updateContentHandler(e, props.section_id, props.content_id, editState.title, editState.description, editState.lectureVideo)}>
                <Form.Group as={Row} className="inputfield">
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

                <Form.Group as={Row} className="inputfield">
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

                {props.section_id ? <LectureVideo /> : null}

                <CButton
                    variant="outline-dark"
                    onClick={inputClearerHandler}>
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
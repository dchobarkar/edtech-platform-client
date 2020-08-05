import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CButton from '../../../../customFunctions/CButton/CButton';

const NewLecture = React.memo(function NewLecture(props) {
    const [lectureState, setLectureState] = useState({
        lectureTitle: '',
        lectureIntro: '',
        lectureVideo: ''
    })

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLectureState(lectureState => ({
            ...lectureState,
            [name]: value
        }))
    }
    const fileInputHandler = (e) => {
        const name = e.target.value;
        const file = e.target.files[0];
        setLectureState(lectureState => ({
            ...lectureState,
            [name]: file
        }))
    }

    const newLectureHandler = (e) => {
        props.newLectureHandler(e, props.section_id, lectureState.lectureTitle, lectureState.lectureIntro, lectureState.lectureVideo);
        let tempLectureState = {
            lectureTitle: '',
            lectureIntro: '',
            lectureVideo: ''
        }
        setLectureState(tempLectureState)
        props.closeTab('Lecture');
    }

    return (
        <div id="addnew" className="container">
            <div className="row">
                <p>{lectureState.lectureTitle}</p>
                <Form onSubmit={(e) => newLectureHandler(e)}>
                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Lecture Title</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="lectureTitle"
                                type="text"
                                value={lectureState.lectureTitle}
                                required
                                title="Please enter a valid title."
                                pattern="^[\w\s]{0,100}$"
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Description</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="lectureIntro"
                                as="textarea"
                                rows="2"
                                value={lectureState.lectureIntro}
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Video</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="lectureVideo"
                                type="file"
                                required
                                onChange={fileInputHandler} />
                        </Col>
                    </Form.Group>

                    <CButton
                        type="submit"
                        className="float-right"
                        variant="outline-dark">
                        Add
                    </CButton>
                </Form>
            </div>
        </div>
    )
})

export default NewLecture;
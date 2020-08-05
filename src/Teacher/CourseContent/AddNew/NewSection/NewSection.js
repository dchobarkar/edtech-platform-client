import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CButton from '../../../../customFunctions/CButton/CButton';

const NewSection = React.memo(function NewSection(props) {
    const [sectionState, setSectionState] = useState({
        sectionTitle: '',
        sectionIntro: ''
    })

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSectionState(sectionState => ({
            ...sectionState,
            [name]: value
        }))
    }

    const newSectionHandler = (e) => {
        props.newSectionHandler(e, sectionState.sectionTitle, sectionState.sectionIntro);
        let tempSectionState = {
            sectionTitle: '',
            sectionIntro: ''
        }
        setSectionState(tempSectionState)
        props.closeTab('Section');
    }

    return (
        <div id="addnew" className="container">
            <div className="row">
                <p>{sectionState.sectionTitle}</p>
                <Form onSubmit={(e) => newSectionHandler(e)}>
                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Section Title</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="sectionTitle"
                                type="text"
                                required
                                title="Please enter a valid title."
                                pattern="^[\w\s]{0,100}$"
                                value={sectionState.sectionTitle}
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="inputfield">
                        <Form.Label column sm={2}>Section Description</Form.Label>
                        <Col sm={10}>
                            <Form.Control
                                name="sectionIntro"
                                as="textarea"
                                rows="2"
                                value={sectionState.sectionIntro}
                                onChange={inputChangeHandler} />
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

export default NewSection;
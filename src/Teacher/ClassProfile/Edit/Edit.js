import React, { useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

import CButton from '../../../customFunctions/CButton/CButton';
import { countryType, stateType } from '../../../utils/variables';

import './Edit.css'

const Edit = React.memo(function Edit(props) {
    const [editState, setEditState] = useState({ ...props.classProfile })

    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditState(editState => ({
            ...editState,
            [name]: value
        }))
    }
    const fileInputHanlder = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        setEditState(editState => ({
            ...editState,
            [name]: file
        }))
    }

    // Restore all values in the input field
    const inputClearer = () => {
        setEditState({ ...props.classProfile })
        props.showEditBoxHandler()
    }

    // Callback to the edit profile function in ClassProfile
    const editClassProfileHandler = (e) => {
        props.editClassProfileHandler(e, editState.classIntro, editState.country_id, editState.state_id, editState.address, editState.city, editState.pincode, editState.bannerImgUrl)
        props.showEditBoxHandler()
    }

    return (
        <div id="editclassprofile" className="container">
            <div className="row shadow p-3 mb-5 bg-white rounded">
                <Form onSubmit={(e) => editClassProfileHandler(e)}>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                name="country_id"
                                as="select"
                                value={editState.country_id}
                                required
                                pattern="^[2]$"
                                title="Please select an option from given values."
                                onChange={inputChangeHandler}>
                                {countryType()}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                name="state_id"
                                as="select"
                                value={editState.state_id}
                                required
                                pattern="^[0 1 2 3][0-9]$"
                                title="Please select an option from given values."
                                onChange={inputChangeHandler}>
                                {stateType()}
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="city"
                                type="text"
                                value={editState.city}
                                required
                                pattern="^[a-zA-Z]{0,50}$"
                                title="City name should contain only alphabets."
                                onChange={inputChangeHandler} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Pin Code</Form.Label>
                            <Form.Control
                                name="pincode"
                                type="text"
                                value={editState.pincode}
                                required
                                pattern="^[0-9]{6}$"
                                title="Please enter a valid 6 digit pincode."
                                onChange={inputChangeHandler} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>Address</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                name="address"
                                type="text"
                                value={editState.address}
                                required
                                pattern="^[\w\s @',/ \. \( \) ]+$"
                                title="Please enter a valid Address"
                                onChange={inputChangeHandler} />
                        </Col>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Class Intro</Form.Label>
                        <Form.Control
                            name="classIntro"
                            as="textarea"
                            rows="4"
                            pattern="^[\w\s !@#%&-=;:',/<> \\ \^ \$ \. \| \? \* \+ \( \) \[ \] \{ \} ]*$"
                            title="Please enter a valid class intro"
                            value={editState.classIntro}
                            onChange={inputChangeHandler} />
                    </Form.Group>

                    <Form.Group as={Row}>
                        <Form.Label column sm={4}>Banner Image</Form.Label>
                        <Col sm={8}>
                            <Form.Control
                                type="file"
                                name="bannerImgUrl"
                                onChange={fileInputHanlder} />
                        </Col>
                    </Form.Group>

                    <CButton
                        variant="outline-dark"
                        onClick={inputClearer}>
                        Discard
                    </CButton>

                    <CButton
                        type="submit"
                        className="float-right"
                        variant="outline-dark">
                        Save
                    </CButton>
                </Form>
            </div>
        </div >
    )
})

export default Edit;
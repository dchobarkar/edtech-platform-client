import React, { useState } from 'react';

import CButton from '../../../customFunctions/CButton/CButton';
import EditModal from './EditModal/EditModal';
import DeleteModal from './DeleteModal/DeleteModal';

const EditButton = React.memo(function EditButton(props) {
    // Delete modal show toggle variable
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    // Edit modal show toggle variable
    const [showEditModal, setShowEditModal] = useState(false)

    // Delete modal toggle function
    const showDeleteModalHandler = () => {
        setShowDeleteModal(!showDeleteModal)
    }
    // Edit modal toggle function
    const showEditModalHandler = () => {
        setShowEditModal(!showEditModal)
    }

    return (
        <React.Fragment>
            <CButton
                className="float-right"
                variant="light"
                onClick={showEditModalHandler}>
                <i className="far fa-edit"></i>
            </CButton>

            <CButton
                className="float-right"
                variant="light"
                onClick={showDeleteModalHandler}>
                <i className="fas fa-trash-alt"></i>
            </CButton>

            {/* Delete modal */}
            <DeleteModal
                queIndex={props.queIndex}
                question_id={props.que_id}
                show={showDeleteModal}
                showDeleteModalHandler={showDeleteModalHandler}
                deleteQuestionHandler={props.deleteQuestionHandler} />

            {/* Edit modal */}
            <EditModal
                queIndex={props.queIndex}
                question_id={props.que_id}
                que={props.que}
                opt1={props.opt1}
                opt2={props.opt2}
                opt3={props.opt3}
                opt4={props.opt4}
                answer={props.answer}
                queImage={props.queImage}
                show={showEditModal}
                showEditModalHandler={showEditModalHandler}
                updateQuestionHandler={props.updateQuestionHandler} />
        </React.Fragment>
    )
})

export default EditButton;
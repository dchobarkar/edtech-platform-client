import React from 'react';

import CModal from '../../../../customFunctions/CModal/CModal';
import CButton from '../../../../customFunctions/CButton/CButton';

const DeleteModal = React.memo(function DeleteModal(props) {
    return (
        <CModal
            show={props.show}
            modalHandler={props.showDeleteModal}>

            <h4>Do you really want to delete this item?</h4>
            <p>Once deleted, you can not recover this item</p>

            <CButton
                variant="outline-dark"
                onClick={props.showDeleteModal}>
                Close
            </CButton>

            <CButton
                className="float-right"
                variant="outline-dark"
                onClick={() => props.deleteQuestionHandler(props.queIndex, props.question_id)}>
                Delete
            </CButton>
        </CModal>
    )
})

export default DeleteModal;
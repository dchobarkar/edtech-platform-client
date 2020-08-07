import React from 'react';

import CModal from '../../../../customFunctions/CModal/CModal';
import CButton from '../../../../customFunctions/CButton/CButton';

const DeleteModal = React.memo(function DeleteModal(props) {
    return (
        <CModal
            show={props.show}
            onHide={props.showDeleteModal}>

            {/* Show different delete message for Section, Lecture, Exam */}
            {props.section_id ?
                (props.isExam ?
                    <React.Fragment>
                        <p className="heading-h5">Do you really want to delete this Exam?</p>
                        <p>Once deleted, you can not recover this Exam.</p>
                        <p>Deleting this Exam will also delete all Questions associated with it.</p>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <p className="heading-h5">Do you really want to delete this Lecture?</p>
                        <p>Once deleted, you can not recover this Lecture.</p>
                    </React.Fragment>
                ) :
                <React.Fragment>
                    <p className="heading-h5">Do you really want to delete this Section?</p>
                    <p>Once deleted, you can not recover this Section.</p>
                    <p>Deleting this Section will also delete all Lectures and Exams associated with it.</p>
                </React.Fragment>
            }

            <CButton
                variant="outline-dark"
                onClick={props.showDeleteModal}>
                Close
            </CButton>

            <CButton
                className="float-right"
                variant="outline-danger"
                onClick={() => props.deleteContentHandler(props.section_id, props.content_id)}>
                Delete
            </CButton>
        </CModal>
    )
})

export default DeleteModal;
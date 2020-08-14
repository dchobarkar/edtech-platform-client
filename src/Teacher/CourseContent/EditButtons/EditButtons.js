import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CButton from '../../../customFunctions/CButton/CButton';
import VideoPlayer from '../../../customFunctions/VideoPlayer/VideoPlayer';
import EditModal from './EditModal/EditModal';
import DeleteModal from './DeleteModal/DeleteModal';

const EditButtons = React.memo(function EditButtons(props) {
    // Show description toggler variable
    const [showDescription, setShowDescription] = useState(false)
    // Show video toggler variable
    const [showVideo, setShowVideo] = useState(false)
    // Show edit box toggler variable
    const [showEditModal, setShowEditModal] = useState(false)
    // Show delete box toggler variable
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    // Functions to toggle showdescription, video modal,edit modal and delete modal
    const showDescriptionHandler = () => {
        setShowDescription(!showDescription)
    }
    const showVideoModalHandler = () => {
        setShowVideo(!showVideo)
    }
    const showEditModalHandler = () => {
        setShowEditModal(!showEditModal)
    }
    const showDeleteModalHandler = () => {
        setShowDeleteModal(!showDeleteModal)
    }

    // Callback to the update content handler function in CourseContent
    const updateContentHandler = (e, section_id, content_id, title, description, lectureVideo) => {
        props.updateContentHandler(e, section_id, content_id, title, description, lectureVideo);
        showEditModalHandler();
    }
    // Button for lectures
    const LessonButton = () => (
        <CButton
            className="float-right"
            variant="light"
            onClick={showEditModalHandler}>
            <i className="far fa-edit"></i>
        </CButton>
    )
    // Button for exams
    const ExamButton = () => (
        <Link to={"/examcontent/" + props.content_id}>
            <CButton
                className="float-right"
                variant="light">
                <i className="far fa-edit"></i>
            </CButton>
        </Link>
    )

    // Variable to show video button only if its a lecture
    let showVideoButton = (props.section_id === null || props.isExam === true) ? false : true;

    return (
        <React.Fragment>
            {showVideoButton ?
                <CButton
                    variant="light"
                    onClick={showVideoModalHandler}>
                    <i className="far fa-play-circle"></i>
                </CButton>
                : null
            }

            <CButton
                className="float-right"
                variant="light"
                onClick={showDeleteModalHandler}>
                <i className="fas fa-trash-alt"></i>
            </CButton>

            {props.isExam ? <ExamButton /> : <LessonButton />}

            <CButton
                className="float-right"
                variant="light"
                onClick={showDescriptionHandler}>
                <i className="fas fa-book"></i>
            </CButton>

            {showDescription ? <div>{props.description}</div> : null}

            <VideoPlayer
                show={showVideo}
                lectureVideo={props.lectureVideo}
                showVideoModalHandler={showVideoModalHandler} />

            <EditModal
                show={showEditModal}
                section_id={props.section_id}
                content_id={props.content_id}
                title={props.title}
                description={props.description}
                showEditModal={showEditModalHandler}
                updateContentHandler={updateContentHandler} />

            <DeleteModal
                show={showDeleteModal}
                section_id={props.section_id}
                content_id={props.content_id}
                isExam={props.isExam}
                showDeleteModal={showDeleteModalHandler}
                deleteContentHandler={props.deleteContentHandler} />
        </React.Fragment>
    )
})

export default EditButtons;
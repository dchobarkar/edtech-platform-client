import React, { useState } from 'react';

import CButton from '../../../customFunctions/CButton/CButton';
import NewSection from './NewSection/NewSection';
import NewLecture from './NewLecture/NewLecture';
import NewExam from './NewExam/NewExam';

import './AddNewButton.css';

const AddNewButtons = React.memo(function (props) {
    // New section box handling variable
    const [newSection, setNewSection] = useState(false);
    // New lecture box handling variable
    const [newLecture, setNewLecture] = useState(false);
    // New exam box handling variable
    const [newExam, setNewExam] = useState(false);

    // General content handler
    const newContentHandler = (e) => {
        switch (e) {
            case "Section":
                setNewLecture(false);
                setNewExam(false);
                setNewSection(!newSection);
                break;
            case "Lecture":
                setNewSection(false);
                setNewExam(false);
                setNewLecture(!newLecture);
                break;
            case "Exam":
                setNewSection(false);
                setNewLecture(false);
                setNewExam(!newExam);
                break;
            default:
        }
    }

    return (
        <React.Fragment>
            <div id="addbutton" className="container">
                <div className="row">
                    {props.isInsideSection ?
                        <React.Fragment>
                            <CButton
                                variant="outline-dark"
                                onClick={() => newContentHandler('Lecture')}>
                                New Lecture
                            </CButton>

                            <CButton
                                variant="outline-dark"
                                onClick={() => newContentHandler('Exam')}>
                                New Exam
                            </CButton>
                        </React.Fragment>
                        : <CButton
                            variant="outline-dark"
                            onClick={() => newContentHandler('Section')}>
                            New Section
                        </CButton>
                    }
                </div>
            </div>

            {/* Display new content adder box according to the selection */}
            {newSection ?
                <NewSection
                    newSectionHandler={props.newSectionHandler}
                    closeTab={newContentHandler} />
                : null
            }

            {newLecture ?
                <NewLecture
                    section_id={props.section_id}
                    newLectureHandler={props.newLectureHandler}
                    closeTab={newContentHandler} />
                : null
            }

            {newExam ?
                <NewExam
                    section_id={props.section_id}
                    newExamHandler={props.newExamHandler}
                    closeTab={newContentHandler} />
                : null
            }
        </React.Fragment >
    )
})

export default AddNewButtons;
import React, { useState, useEffect } from 'react';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';

import CourseDetails from './CourseDetails/CourseDetails';
import EditButtons from './EditButtons/EditButtons';
import AddNewButtons from './AddNew/AddNewButtons';

import './CourseContent.css';

const CourseContent = React.memo(function CourseContent(props) {
    const [courseContentState, setCourseContentState] = useState({
        course_id: '',
        courseTitle: '',
        courseIntro: '',
        fee: '',
        studentsEnrolled: '',
        ratingPoint: '',
        noOfRationg: '',
        targetAudience_id: '',
        targetAudience: '',
        subject_id: '',
        subject: '',
        sections: [
            {
                lectureEntitys: [],
                examEntitys: []
            }
        ],
    });
    const [isLoading, setIsLoading] = useState(false);

    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.authKey
        }
    }
    const course_id = props.match.params.id

    // Get all course information
    useEffect(() => {
        setIsLoading(true);
        axios.get('/course/' + course_id + '/allsections', {
            headers: {
                "Authorization": "Bearer " + localStorage.authKey
            }
        })
            .then(response => {
                setCourseContentState(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [course_id])

    // Update course details
    const updateCourseHandler = (e, courseTitle, targetAudience_id, subject_id, fee, courseIntro) => {
        e.preventDefault();
        setIsLoading(true)
        const updatedCourseDetails = {
            courseTitle: courseTitle,
            targetAudience_id: targetAudience_id,
            subject_id: subject_id,
            fee: fee,
            courseIntro: courseIntro,
        }
        axios.patch('/course/' + course_id + '/update', updatedCourseDetails, config)
            .then(response => {
                setCourseContentState(courseContentState => ({
                    ...courseContentState,
                    ...response.data
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    // Add new section
    const newSectionHandler = (e, sectionTitle, sectionIntro) => {
        e.preventDefault();
        setIsLoading(true)
        const newSection = {
            sectionTitle: sectionTitle,
            sectionIntro: sectionIntro,
        };
        axios.post('/section/' + course_id, newSection, config)
            .then(response => {
                setCourseContentState(courseContentState => ({
                    ...courseContentState,
                    sections: [
                        ...courseContentState.sections,
                        {
                            ...response.data,
                            lectureEntitys: [],
                            examEntitys: []
                        }]
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    // Add new lecture in the respective section
    const newLectureHandler = (e, section_id, lectureTitle, lectureIntro, video) => {
        e.preventDefault();
        setIsLoading(true)

        const newLecture = new FormData();
        newLecture.append('lectureTitle', lectureTitle)
        newLecture.append('lectureIntro', lectureIntro)
        newLecture.append('video', video)

        axios.post('/lecture/' + section_id, newLecture, config)
            .then(response => {
                const secIndex = courseContentState.sections.findIndex(section => {
                    return section.section_id === section_id
                });
                const newSections = [...courseContentState.sections]
                const newSectionEntity = {
                    ...newSections[secIndex],
                    lectureEntitys: [
                        ...newSections[secIndex].lectureEntitys,
                        { ...response.data }
                    ]
                }
                newSections[secIndex] = newSectionEntity
                setCourseContentState(courseContentState => ({
                    ...courseContentState,
                    sections: newSections
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    // Add new exam in the respective section
    const newExamHandler = (e, section_id, examTitle, examInstruction, duration) => {
        e.preventDefault();
        setIsLoading(true)
        const newExam = {
            examTitle: examTitle,
            examInstruction: examInstruction,
            duration: duration
        }
        axios.post('/exam/' + section_id, newExam, config)
            .then(response => {
                const secIndex = courseContentState.sections.findIndex(section => {
                    return section.section_id === section_id
                });
                const newSections = [...courseContentState.sections]
                const newSectionEntity = {
                    ...newSections[secIndex],
                    examEntitys: [
                        ...newSections[secIndex].examEntitys,
                        { ...response.data }
                    ]
                }
                newSections[secIndex] = newSectionEntity
                setCourseContentState(courseContentState => ({
                    ...courseContentState,
                    sections: newSections
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    // Edit content (Section or Lecture)
    const updateContentHandler = (e, section_id, content_id, title, description, lectureVideo) => {
        e.preventDefault();
        setIsLoading(true)

        // For section
        if (section_id === null) {
            const updatedSection = {
                sectionTitle: title,
                sectionIntro: description
            }
            axios.patch('/section/' + content_id + '/update', updatedSection, config)
                .then(response => {
                    const secIndex = courseContentState.sections.findIndex(section => {
                        return section.section_id === content_id
                    });
                    const newSections = [...courseContentState.sections]
                    const newSectionEntity = {
                        ...newSections[secIndex],
                        ...response.data
                    }
                    newSections[secIndex] = newSectionEntity
                    setCourseContentState(courseContentState => ({
                        ...courseContentState,
                        sections: newSections
                    }))
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        }
        // For lecture
        else {
            const updatedLecture = new FormData()
            updatedLecture.append('lectureTitle', title)
            updatedLecture.append('lectureIntro', description)
            updatedLecture.append('video', lectureVideo)

            axios.patch('/lecture/' + content_id + '/update', updatedLecture, config)
                .then(response => {
                    const secIndex = courseContentState.sections.findIndex(section => {
                        return section.section_id === section_id
                    });
                    const lecIndex = courseContentState.sections[secIndex].lectureEntitys.findIndex(lecture => {
                        return lecture.lecture_id === content_id
                    });

                    const newSections = [...courseContentState.sections,]
                    const newSectionEntity = { ...newSections[secIndex] }
                    const newLectureEntitys = [...newSectionEntity.lectureEntitys]
                    const newLectureEntity = {
                        ...newLectureEntitys[lecIndex],
                        ...response.data
                    }
                    newLectureEntitys[lecIndex] = newLectureEntity;
                    newSectionEntity.lectureEntitys = newLectureEntitys;
                    newSections[secIndex] = newSectionEntity;

                    setCourseContentState(courseContentState => ({
                        ...courseContentState,
                        sections: newSections
                    }))
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        };
    };

    // Delete content (Section or Lecture)
    const deleteContentHandler = (section_id, content_id) => {
        setIsLoading(true)

        // For Section 
        if (section_id === null) {
            axios.delete('/section/' + content_id, config)
                .then(response => {
                    const secIndex = courseContentState.sections.findIndex(section => {
                        return section.section_id === content_id
                    });
                    const newSections = [...courseContentState.sections]
                    newSections.splice(secIndex, 1)
                    setCourseContentState(courseContentState => ({
                        ...courseContentState,
                        sections: newSections
                    }))
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        }
        // For Lecture
        else {
            axios.delete('/lecture/' + content_id, config)
                .then(response => {
                    const secIndex = courseContentState.sections.findIndex(section => {
                        return section.section_id === section_id
                    });
                    const lecIndex = courseContentState.sections[secIndex].lectureEntitys.findIndex(lecture => {
                        return lecture.lecture_id === content_id
                    });

                    const newSections = [...courseContentState.sections]
                    const newSectionEntity = { ...newSections[secIndex] }
                    const newLectureEntitys = [...newSectionEntity.lectureEntitys]
                    newLectureEntitys.splice(lecIndex, 1)

                    newSectionEntity.lectureEntitys = newLectureEntitys;
                    newSections[secIndex] = newSectionEntity;

                    setCourseContentState(courseContentState => ({
                        ...courseContentState,
                        sections: newSections
                    }))
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        };
    };

    // Delete Exam
    const deleteExamHandler = (section_id, exam_id) => {
        setIsLoading(true)
        axios.delete('/exam/' + exam_id, config)
            .then(response => {
                const secIndex = courseContentState.sections.findIndex(section => {
                    return section.section_id === section_id
                });
                const examIndex = courseContentState.sections[secIndex].examEntitys.findIndex(exam => {
                    return exam.exam_id === exam_id
                });

                const newSections = [...courseContentState.sections]
                const newSectionEntity = { ...newSections[secIndex] }
                const newExamEntitys = [...newSectionEntity.examEntitys]
                newExamEntitys.splice(examIndex, 1)

                newSectionEntity.examEntitys = newExamEntitys;
                newSections[secIndex] = newSectionEntity;

                setCourseContentState(courseContentState => ({
                    ...courseContentState,
                    sections: newSections
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let i = 0;
    let j = 0;

    let courseContent =
        <div id="coursecontent" className="container">

            <h4>{courseContentState.courseTitle}</h4>
            {/* Show course details button */}
            <CourseDetails
                courseTitle={courseContentState.courseTitle}
                targetAudience_id={courseContentState.targetAudience_id}
                subject_id={courseContentState.subject_id}
                fee={courseContentState.fee}
                courseIntro={courseContentState.courseIntro}
                updateCourseHandler={updateCourseHandler} />

            {/* Render every section */}
            {courseContentState.sections.map((section, Index) => (
                <div key={Index} id="individualsection" className="row">

                    <div id="sectionname">

                        <span>{i = i + 1}.  {section.sectionTitle}</span>

                        {/* Edit options for section */}
                        <EditButtons
                            section_id={null}
                            content_id={section.section_id}
                            title={section.sectionTitle}
                            description={section.sectionIntro}
                            lectureVideo={null}
                            isExam={false}
                            updateContentHandler={updateContentHandler}
                            deleteContentHandler={deleteContentHandler} />
                    </div>

                    {/* Render every Lecture */}
                    {section.lectureEntitys.map((lecture) => (
                        <div key={lecture.lecture_id} id="individualcontent">

                            <span>{j = j + 1}.  {lecture.lectureTitle}

                                {/* Edit options for Lectures */}
                                <EditButtons
                                    section_id={section.section_id}
                                    content_id={lecture.lecture_id}
                                    title={lecture.lectureTitle}
                                    description={lecture.lectureIntro}
                                    lectureVideo={lecture.lectureVideo}
                                    isExam={false}
                                    updateContentHandler={updateContentHandler}
                                    deleteContentHandler={deleteContentHandler} />
                            </span>
                        </div>
                    ))}

                    {/* Enter every Exam */}
                    {section.examEntitys.map((exam) => (
                        <div key={exam.exam_id} id="individualcontent">

                            <span>{j = j + 1}.  {exam.examTitle}

                                {/* Edit options for Exam */}
                                <EditButtons
                                    section_id={section.section_id}
                                    content_id={exam.exam_id}
                                    title={exam.examTitle}
                                    description={exam.examInstruction}
                                    lectureVideo={null}
                                    isExam={true}
                                    deleteContentHandler={deleteExamHandler} />
                            </span>
                        </div>
                    ))}

                    {/* Add new Lecture and Exam */}
                    <AddNewButtons
                        isInsideSection={true}
                        section_id={section.section_id}
                        newLectureHandler={newLectureHandler}
                        newExamHandler={newExamHandler} />
                </div>
            ))}

            {/* Add new Section */}
            <AddNewButtons
                isInsideSection={false}
                newSectionHandler={newSectionHandler} />
        </div>

    if (isLoading) {
        courseContent = <Spinner />
    }

    return (
        <div className="fullscreen">

            {courseContent}

        </div>
    )
})

export default withErrorHandler(CourseContent, axios);
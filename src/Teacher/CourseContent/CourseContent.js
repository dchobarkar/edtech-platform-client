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
        course_id: null,
        courseTitle: '',
        courseIntro: null,
        fee: null,
        studentsEnrolled: null,
        ratingPoint: null,
        noOfRationg: null,
        targetAudience_id: null,
        targetAudience: null,
        subject_id: null,
        subject: null,
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

    useEffect(() => {
        setIsLoading(true);
        axios.get('/course/' + course_id + '/allsections', config)
            .then(response => {
                setCourseContentState(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [])

    const updateCourseHandler = (e, courseTitle, targetAudience_id, subject_id, courseIntro, fee) => {
        e.preventDefault();
        setIsLoading(true)
        const updatedCourseDetails = {
            courseTitle: courseTitle,
            targetAudience_id: targetAudience_id,
            subject_id: subject_id,
            courseIntro: courseIntro,
            fee: fee
        }
        axios.patch('/course/' + course_id + '/update', updatedCourseDetails, config)
            .then(response => {
                let tempCourseContentState = {
                    ...courseContentState,
                    ...response.data
                }
                setCourseContentState(tempCourseContentState)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    const newSectionHandler = (e, sectionTitle, sectionIntro) => {
        e.preventDefault();
        setIsLoading(true)
        const newSection = {
            sectionTitle: sectionTitle,
            sectionIntro: sectionIntro,
        };
        axios.post('/section/' + course_id, newSection, config)
            .then(response => {
                const newSection = {
                    ...response.data,
                    lectureEntitys: [],
                    examEntitys: []
                }
                let tempCourseContentState = { ...courseContentState }
                tempCourseContentState.sections.push(newSection)
                setCourseContentState(tempCourseContentState)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    const newLectureHandler = (e, section_id, lectureTitle, lectureIntro, video) => {
        e.preventDefault();
        setIsLoading(true)

        const newLecture = new FormData();
        newLecture.append('lectureTitle', lectureTitle)
        newLecture.append('lectureIntro', lectureIntro)
        newLecture.append('video', video)

        axios.post('/lecture/' + section_id, newLecture, config)
            .then(response => {
                const tempCourseContentState = { ...courseContentState }
                const secIndex = tempCourseContentState.sections.findIndex(section => {
                    return section.section_id === section_id
                });
                const sectionEntity = tempCourseContentState.sections[secIndex]
                sectionEntity.lectureEntitys.push(response.data)
                tempCourseContentState.sections[secIndex] = sectionEntity

                setCourseContentState(tempCourseContentState)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

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
                const tempCourseContentState = { ...courseContentState }
                const secIndex = tempCourseContentState.sections.findIndex(section => {
                    return section.section_id === section_id
                });
                const sectionEntity = tempCourseContentState.sections[secIndex]
                sectionEntity.examEntitys.push(response.data)
                tempCourseContentState.sections[secIndex] = sectionEntity

                setCourseContentState(tempCourseContentState)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    };

    const updateContentHandler = (e, section_id, content_id, title, description, lectureVideo) => {
        e.preventDefault();
        setIsLoading(true)

        if (section_id === null) {
            const updatedSection = {
                sectionTitle: title,
                sectionIntro: description
            }
            axios.patch('/section/' + content_id + '/update', updatedSection, config)
                .then(response => {
                    const tempCourseContentState = { ...courseContentState }
                    const secIndex = tempCourseContentState.sections.findIndex(section => {
                        return section.section_id === content_id
                    });
                    const sectionEntity = tempCourseContentState.sections[secIndex]
                    sectionEntity.sectionTitle = response.data.sectionTitle;
                    sectionEntity.sectionIntro = response.data.sectionIntro;
                    tempCourseContentState.sections[secIndex] = sectionEntity

                    setCourseContentState(tempCourseContentState)
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        }
        else {
            const updatedLecture = new FormData()
            updatedLecture.append('lectureTitle', title)
            updatedLecture.append('lectureIntro', description)
            updatedLecture.append('video', lectureVideo)

            axios.patch('/lecture/' + content_id + '/update', updatedLecture, config)
                .then(response => {
                    const tempCourseContentState = { ...courseContentState }
                    const secIndex = tempCourseContentState.sections.findIndex(section => {
                        return section.section_id === section_id
                    });
                    const sectionEntity = tempCourseContentState.sections[secIndex]
                    const lecIndex = sectionEntity.lectureEntitys.findIndex(lecture => {
                        return lecture.lecture_id === content_id
                    });
                    const lectureEntity = sectionEntity.lectureEntitys[lecIndex]
                    lectureEntity.lectureTitle = response.data.lectureTitle;
                    lectureEntity.lectureIntro = response.data.lectureIntro;
                    lectureEntity.lectureVideo = response.data.lectureVideo;

                    tempCourseContentState.sections[secIndex].lectureEntitys[lecIndex] = lectureEntity

                    setCourseContentState(tempCourseContentState)
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        };
    };

    const deleteContentHandler = (section_id, content_id) => {
        setIsLoading(true)
        if (section_id === null) {
            axios.delete('/section/' + content_id, config)
                .then(response => {
                    const tempCourseContentState = { ...courseContentState }
                    const secIndex = tempCourseContentState.sections.findIndex(section => {
                        return section.section_id === content_id
                    });
                    const sectionEntitys = tempCourseContentState.sections
                    sectionEntitys.splice(secIndex, 1)
                    tempCourseContentState.sections = sectionEntitys

                    setCourseContentState(tempCourseContentState)
                    setIsLoading(false)

                })
                .catch(error => {
                    setIsLoading(false)
                })
        }
        else {
            axios.delete('/lecture/' + content_id, config)
                .then(response => {
                    const tempCourseContentState = { ...courseContentState }
                    const secIndex = tempCourseContentState.sections.findIndex(section => {
                        return section.section_id === section_id
                    });
                    const sectionEntity = tempCourseContentState.sections[secIndex]
                    const lecIndex = sectionEntity.lectureEntitys.findIndex(lecture => {
                        return lecture.lecture_id === content_id
                    });
                    sectionEntity.lectureEntitys.splice(lecIndex, 1)

                    tempCourseContentState.sections[secIndex] = sectionEntity

                    setCourseContentState(tempCourseContentState)
                    setIsLoading(false)
                })
                .catch(error => {
                    setIsLoading(false)
                })
        };
    };

    const deleteExamHandler = (section_id, exam_id) => {
        setIsLoading(true)
        axios.delete('/exam/' + exam_id, config)
            .then(response => {
                const tempCourseContentState = { ...courseContentState }
                const secIndex = tempCourseContentState.sections.findIndex(section => {
                    return section.section_id === section_id
                });
                const sectionEntity = tempCourseContentState.sections[secIndex]
                const examIndex = sectionEntity.examEntitys.findIndex(exam => {
                    return exam.exam_id === exam_id
                });
                sectionEntity.examEntitys.splice(examIndex, 1)

                tempCourseContentState.sections[secIndex] = sectionEntity

                setCourseContentState(tempCourseContentState)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let i = 0;
    let j = 0;

    let courseContent =
        <div id="coursecontent" className="fullscreen container">

            <h4>{courseContentState.courseTitle}</h4>

            <CourseDetails
                courseTitle={courseContentState.courseTitle}
                targetAudience_id={courseContentState.targetAudience_id}
                subject_id={courseContentState.subject_id}
                courseIntro={courseContentState.courseIntro}
                fee={courseContentState.fee}
                updateCourseHandler={updateCourseHandler} />

            {courseContentState.sections.map((section) => (
                <div key={section.section_id} id="individualsection" className="row">
                    <div id="sectionname">

                        <span>{i = i + 1}.  {section.sectionTitle}</span>

                        <EditButtons
                            section_id={null}
                            content_id={section.section_id}
                            title={section.sectionTitle}
                            description={section.sectionIntro}
                            updateContentHandler={updateContentHandler}
                            deleteContentHandler={deleteContentHandler} />
                    </div>

                    {section.lectureEntitys.map((lecture) => (
                        <div key={lecture.lecture_id} id="individualcontent">

                            <span>{j = j + 1}.  {lecture.lectureTitle}

                                <EditButtons
                                    section_id={section.section_id}
                                    content_id={lecture.lecture_id}
                                    title={lecture.lectureTitle}
                                    description={lecture.lectureIntro}
                                    lectureVideo={lecture.lectureVideo}
                                    updateContentHandler={updateContentHandler}
                                    deleteContentHandler={deleteContentHandler} />
                            </span>
                        </div>
                    ))}

                    {section.examEntitys.map((exam) => (
                        <div key={exam.exam_id} id="individualcontent">

                            <span>{j = j + 1}.  {exam.examtitle}
                                <EditButtons
                                    section_id={section.section_id}
                                    content_id={exam.exam_id}
                                    title={exam.examTitle}
                                    description={exam.examInstruction}
                                    isExam={true}
                                    deleteContentHandler={deleteExamHandler} />
                            </span>
                        </div>
                    ))}

                    <AddNewButtons
                        isInsideSection={true}
                        section_id={section.section_id}
                        newLectureHandler={newLectureHandler}
                        newExamHandler={newExamHandler} />

                </div>
            ))}
        </div>

    if (isLoading) {
        courseContent = <Spinner />
    }

    return (
        <React.Fragment>

            {courseContent}

            <AddNewButtons
                isInsideSection={false}
                newSectionHandler={newSectionHandler} />
        </React.Fragment>
    )
})

export default withErrorHandler(CourseContent, axios);
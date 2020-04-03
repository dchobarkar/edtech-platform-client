import React, { Component } from 'react';
import axios from '../../axios-server';

import CourseDetails from './CourseDetails/CourseDetails';
import EditButtons from './EditButtons/EditButtons';
import AddNewButtons from '../AddNew/AddNewButtons';

import './CourseContent.css';

class CourseContent extends Component {
    state = {
        coursetitle: null,
        targetaudience_id: null,
        subject_id: null,
        courseintro: null,
        sectionentitys: [
            {
                lectureentitys: [],
                examentitys: []
            }
        ],

    };

    componentDidMount() {
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }

        const courseid = this.props.match.params.id;
        axios.get('/course/' + courseid + '/allsections', config)
            .then(response => {
                this.setState({
                    ...response.data,
                })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    updateCourseHandler = (coursetitle, targetaudience_id, subject_id, courseintro, fee) => {
        let config = {
            headers: {
                "Authorization": "Bearer " + localStorage.authkey
            }
        }

        const updatedCourseDetails = { coursetitle: null, targetaudience_id: null, subject_id: null, courseintro: null, fee: null };
        updatedCourseDetails.coursetitle = coursetitle;
        updatedCourseDetails.targetaudience_id = targetaudience_id;
        updatedCourseDetails.subject_id = subject_id;
        updatedCourseDetails.courseintro = courseintro;
        updatedCourseDetails.fee = fee;

        const courseid = this.props.match.params.id;
        axios.patch('/course/' + courseid + '/update', updatedCourseDetails, config)
            .then(response => {
                this.setState({
                    coursetitle: response.data.coursetitle,
                    targetaudience_id: response.data.targetaudience_id,
                    subject_id: response.data.subject_id,
                    classintro: response.data.classintro,
                    fee: response.data.fee
                })
            })
            .catch(error => { alert(error.message) })
    };

    newSectionHandler = (sectiontitle, sectionintro) => {
        const newSection = {
            sectiontitle: sectiontitle,
            sectionintro: sectionintro,
        };
        const courseid = this.props.match.params.id;

        axios.post('/section/' + courseid, newSection)
            .then(response => {
                const newSection = {
                    ...response.data,
                    lectureentitys: [],
                    examentitys: []
                }
                const addSection = [...this.state.sectionentitys];
                addSection.push(newSection);
                this.setState({
                    sectionentitys: addSection
                })
            })
            .catch(error => { alert(error.message) })

    };

    newLectureHandler = (sectionid, lecturetitle, lectureintro, lecturevideo) => {
        const NewLecture = {
            lecturetitle: lecturetitle,
            lectureintro: lectureintro,
            lecturevideo: 'https://music.youtube.com/watch?v=yAsIp0bjdRs&list=RDAMVMyAsIp0bjdRs'
        }
        axios.post('/lecture/' + sectionid, NewLecture)
            .then(response => {
                const secIndex = this.state.sectionentitys.findIndex(d => {
                    return d.section_id === sectionid
                });
                const addlecture = this.state.sectionentitys[secIndex]
                addlecture.lectureentitys.push(response.data)

                this.setState({
                    ...this.state.sectionentitys[secIndex],
                    lectureentitys: addlecture.lectureentitys
                })
            })
            .catch(error => { alert(error.message) })

    };

    newExamHandler = (sectionid, examtitle, examinstruction, duration) => {
        const NewExam = {
            examtitle: examtitle,
            examinstruction: examinstruction,
            duration: duration
        }
        axios.post('/exam/' + sectionid, NewExam)
            .then(response => {
                const secIndex = this.state.sectionentitys.findIndex(d => {
                    return d.section_id === sectionid
                });
                const addexam = this.state.sectionentitys[secIndex]
                addexam.examentitys.push(response.data)

                this.setState({
                    ...this.state.sectionentitys[secIndex],
                    examentitys: addexam.examentitys
                })
            })
            .catch(error => { alert(error.message) })

    };

    updateContentHandler = (sectionid, contentid, title, description, lecturevideo) => {
        if (sectionid === null) {
            const updatedSectionDetails = {
                sectiontitle: title,
                sectionintro: description
            }

            axios.patch('/section/' + contentid + '/update', updatedSectionDetails)
                .then(response => {
                    const secIndex = this.state.sectionentitys.findIndex(d => {
                        return d.section_id === contentid
                    });
                    const updatedSectionEntitys = this.state.sectionentitys[secIndex]
                    updatedSectionEntitys.sectiontitle = response.data.sectiontitle;
                    updatedSectionEntitys.sectionintro = response.data.sectionintro;

                    this.setState({
                        ...this.state.sectionentitys,
                        [secIndex]: updatedSectionEntitys
                    })
                })
                .catch(error => {
                    alert(error.message)
                })
        }
        else {
            const updatedLectureDetails = {
                lecturetitle: title,
                lectureintro: description,
                lecturevideo: lecturevideo
            }
            axios.patch('/lecture/' + contentid + '/update', updatedLectureDetails)
                .then(response => {
                    const secIndex = this.state.sectionentitys.findIndex(d => {
                        return d.section_id === sectionid
                    });
                    const updatedsection = this.state.sectionentitys[secIndex]
                    const lecIndex = updatedsection.lectureentitys.findIndex(d => {
                        return d.lecture_id === contentid
                    })
                    updatedsection.lectureentitys[lecIndex].lecturetitle = response.data.lecturetitle;
                    updatedsection.lectureentitys[lecIndex].lectureintro = response.data.lectureintro
                    updatedsection.lectureentitys[lecIndex].lecturevideo = response.data.lecturevideo

                    this.setState({
                        ...this.state.sectionentitys[secIndex].lectureentitys,
                        [lecIndex]: updatedsection.lectureentitys[lecIndex],
                    })
                })
                .catch(error => { alert(error.message) })

        };
    };

    deleteContentHandler = (sectionid, contentid) => {
        if (sectionid === null) {
            axios.delete('/section/' + contentid)
                .then(response => {
                    const secIndex = this.state.sectionentitys.findIndex(d => {
                        return d.section_id === contentid
                    });
                    const sectionentitys = [...this.state.sectionentitys];
                    sectionentitys.splice(secIndex, 1);
                    this.setState({
                        sectionentitys: sectionentitys
                    });
                })
                .catch(error => {
                    alert(error.message)
                })
        }
        else {
            axios.delete('/lecture/' + contentid)
                .then(response => {
                    const secIndex = this.state.sectionentitys.findIndex(d => {
                        return d.section_id === sectionid
                    });
                    const updatedsection = this.state.sectionentitys[secIndex]
                    const lecIndex = updatedsection.lectureentitys.findIndex(d => {
                        return d.lecture_id === contentid
                    })
                    updatedsection.lectureentitys.splice(lecIndex, 1)
                    this.setState({
                        ...this.state.sectionentitys[secIndex],
                        lectureentitys: updatedsection.lectureentitys
                    });
                })
                .catch(error => {
                    alert(error.message)
                })
        };
    };

    deleteExamHandler = (sectionid, examid) => {
        axios.delete('/exam/' + examid)
            .then(response => {
                const secIndex = this.state.sectionentitys.findIndex(d => {
                    return d.section_id === sectionid
                });
                const updatedsection = this.state.sectionentitys[secIndex]
                const examIndex = updatedsection.examentitys.findIndex(d => {
                    return d.exam_id === examid
                })
                updatedsection.examentitys.splice(examIndex, 1)
                this.setState({
                    ...this.state.sectionentitys[secIndex],
                    examentitys: updatedsection.examentitys
                });
            })
            .catch(error => {
                alert(error.message)
            })
    }

    render() {
        let i = 0;
        let j = 0;

        return (
            <div className="fullscreen">
                <section id="previouscontent">
                    {this.state.coursetitle ?
                        <div className="container">
                            <h4>{this.state.coursetitle}</h4>

                            <CourseDetails
                                coursetitle={this.state.coursetitle}
                                targetaudience_id={this.state.targetaudience_id}
                                subject_id={this.state.subject_id}
                                courseintro={this.state.courseintro}
                                fee={this.state.fee}
                                updatecoursehandler={this.updateCourseHandler} />

                            {this.state.sectionentitys.map((section) => {
                                return <div className="row" id="individualchapter" key={section.section_id}>
                                    <div id="chaptername">
                                        <span>{i = i + 1}.  {section.sectiontitle}</span>

                                        <EditButtons
                                            sectionid={null}
                                            contentid={section.section_id}
                                            title={section.sectiontitle}
                                            description={section.sectionintro}
                                            updatecontenthandler={this.updateContentHandler}
                                            deletecontenthandler={this.deleteContentHandler} />
                                    </div>

                                    {section.lectureentitys.map((lecture) => {
                                        return < div id="individualcontent" key={lecture.lecture_id} >
                                            <span>{j = j + 1}.  {lecture.lecturetitle}
                                                <EditButtons
                                                    sectionid={section.section_id}
                                                    contentid={lecture.lecture_id}
                                                    title={lecture.lecturetitle}
                                                    description={lecture.lectureintro}
                                                    lecturevideo={lecture.lecturevideo}
                                                    updatecontenthandler={this.updateContentHandler}
                                                    deletecontenthandler={this.deleteContentHandler} />
                                            </span>
                                        </div>
                                    })}

                                    {section.examentitys.map((exam) => {
                                        return < div id="individualcontent" key={exam.exam_id} >
                                            <span>{j = j + 1}.  {exam.examtitle}
                                                <EditButtons
                                                    sectionid={section.section_id}
                                                    contentid={exam.exam_id}
                                                    title={exam.examtitle}
                                                    description={exam.examinstruction}
                                                    isexam={true}
                                                    deletecontenthandler={this.deleteExamHandler} />
                                            </span>
                                        </div>
                                    })}
                                    <AddNewButtons
                                        insidesection={true}
                                        sectionid={section.section_id}
                                        newlecturehandler={this.newLectureHandler}
                                        newexamhandler={this.newExamHandler} />
                                </div>
                            })}
                        </div>
                        : null}
                </section>

                <AddNewButtons
                    insidesection={false}
                    newsectionhandler={this.newSectionHandler} />
            </div>
        )
    }
}

export default CourseContent;
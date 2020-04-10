import React, { Component } from 'react';
import axios from '../../axios-server';

import Spinner from '../../components/Spinner/Spinner';
import DModal from '../../components/DModal/DModal';
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
        loading: false,
        error: false,
        errormsg: null
    };

    componentDidMount() {
        this.setState({ loading: true })
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
                    loading: false
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }

    updateCourseHandler = (e, coursetitle, targetaudience_id, subject_id, courseintro, fee) => {
        e.preventDefault();
        this.setState({ loading: true })
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
                    fee: response.data.fee,
                    loading: false
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    };

    newSectionHandler = (e, sectiontitle, sectionintro) => {
        e.preventDefault();
        this.setState({ loading: true })
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
                    sectionentitys: addSection,
                    loading: false
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    };

    newLectureHandler = (e, sectionid, lecturetitle, lectureintro, lecturevideo) => {
        e.preventDefault();
        this.setState({ loading: true });
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
                    loading: false,
                    ...this.state.sectionentitys[secIndex],
                    lectureentitys: addlecture.lectureentitys
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    };

    newExamHandler = (e, sectionid, examtitle, examinstruction, duration) => {
        e.preventDefault();
        this.setState({ loading: true })
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
                    loading: false,
                    ...this.state.sectionentitys[secIndex],
                    examentitys: addexam.examentitys
                })
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    };

    updateContentHandler = (e, sectionid, contentid, title, description, lecturevideo) => {
        e.preventDefault();
        if (sectionid === null) {
            this.setState({ loading: true })
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
                        loading: false,
                        ...this.state.sectionentitys,
                        [secIndex]: updatedSectionEntitys
                    })
                })
                .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
        }
        else {
            this.setState({ loading: true })
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
                        loading: false,
                        ...this.state.sectionentitys[secIndex].lectureentitys,
                        [lecIndex]: updatedsection.lectureentitys[lecIndex],
                    })
                })
                .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
        };
    };

    deleteContentHandler = (sectionid, contentid) => {
        if (sectionid === null) {
            this.setState({ loading: true })
            axios.delete('/section/' + contentid)
                .then(response => {
                    const secIndex = this.state.sectionentitys.findIndex(d => {
                        return d.section_id === contentid
                    });
                    const sectionentitys = [...this.state.sectionentitys];
                    sectionentitys.splice(secIndex, 1);
                    this.setState({
                        sectionentitys: sectionentitys,
                        loading: false
                    });
                })
                .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
        }
        else {
            this.setState({ loading: true })
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
                        loading: false,
                        ...this.state.sectionentitys[secIndex],
                        lectureentitys: updatedsection.lectureentitys
                    });
                })
                .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
        };
    };

    deleteExamHandler = (sectionid, examid) => {
        this.setState({ loading: true })
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
                    loading: false,
                    ...this.state.sectionentitys[secIndex],
                    examentitys: updatedsection.examentitys
                });
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    }

    render() {
        let i = 0;
        let j = 0;

        let PreviousContent =
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
                    </div> : null}
            </section>

        if (this.state.loading) {
            PreviousContent = <Spinner />
        }

        return (
            <div className="fullscreen">

                {PreviousContent}

                {this.state.error ?
                    <DModal show={this.state.error}
                        modalhandler={this.errorModalHandler}>
                        {Array.isArray(this.state.errormsg) ?
                            <>
                                {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                            </>
                            : < p > {this.state.errormsg}</p>}
                    </DModal> : null}

                <AddNewButtons
                    insidesection={false}
                    newsectionhandler={this.newSectionHandler} />
            </div>
        )
    }
}

export default CourseContent;
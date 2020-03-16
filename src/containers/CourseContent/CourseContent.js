import React, { Component } from 'react';

import CourseInfo from './CourseInfo/CourseInfo';
import EditButtons from './EditButtons/EditButtons';
import AddNewButtons from '../AddNew/AddNewButtons';

import './CourseContent.css';

class CourseContent extends Component {
    state = {
        id: 9,
        coursename: 'Physics I',
        targetaudiance: '12th-PCM',
        subject: 'Physics',
        introduction: 'Here lies the course Introduction',
        coursedetails: [
            {
                chaptername: 'Chapter 1',
                description: 'In this chapter you will learn to do something',
                id: '1',
                lessons: [
                    {
                        lessonname: 'Units and Measures',
                        description: 'You will learn about units and measurements',
                        id: '2'
                    },
                    {
                        lessonname: 'Circular Motions',
                        description: 'You will learn about circular motions',
                        id: '3'
                    },
                    {
                        lessonname: 'Magnetic Force',
                        description: 'You will learn about Magnetic Force',
                        id: '4'
                    }
                ]
            },
            {
                chaptername: 'Chapter 2',
                description: 'In this chapter you will learn to do something',
                id: '5',
                lessons: [
                    {
                        lessonname: 'Kinetic Force',
                        description: 'In this chapter you will learn about Kinetic Force',
                        id: '6'
                    },
                    {
                        lessonname: 'Just do It',
                        description: 'Nike cha slogan',
                        id: '7'
                    },
                    {
                        isexam: true,
                        lessonname: 'Life',
                        description: 'All you can do is try',
                        id: '8'
                    }
                ]
            }
        ]
    };

    newChapterHandler = (chaptername, description) => {
        const newchapter = {
            chaptername: chaptername,
            description: description,
            id: this.state.id + 1,
            lessons: []
        };
        const addchapter = [...this.state.coursedetails];
        addchapter.push(newchapter);

        this.setState({
            id: newchapter.id,
            coursedetails: addchapter
        })
    };

    newLessonHandler = (lessonname, description) => {
        const newlesson = {
            lessonname: lessonname,
            description: description,
            id: this.state.id + 1
        };
        const addlesson = [...this.state.coursedetails];
        const i = addlesson.length - 1;
        addlesson[i].lessons.push(newlesson);
        this.setState({
            id: newlesson.id,
            coursedetails: addlesson
        });
    };

    newExamHandler = (examname, instructions) => {
        const newexam = {
            isexam: true,
            lessonname: examname,
            description: instructions,
            id: this.state.id + 1
        };
        const addexam = [...this.state.coursedetails]
        const i = addexam.length - 1;
        addexam[i].lessons.push(newexam)
        this.setState({
            id: newexam.id,
            coursedetails: addexam
        });
    };

    editHandler = (chpid, id, title, description) => {
        if (chpid === null) {
            const chpIndex = this.state.coursedetails.findIndex(d => {
                return d.id === id
            });
            const editchapter = [...this.state.coursedetails];
            editchapter[chpIndex].chaptername = title;
            editchapter[chpIndex].description = description;

            this.setState({
                coursedetails: editchapter
            });
        }
        else {
            const chpIndex = this.state.coursedetails.findIndex(d => {
                return d.id === chpid
            });
            const lessonIndex = this.state.coursedetails[chpIndex].lessons.findIndex(d => {
                return d.id === id
            });
            const chapters = [...this.state.coursedetails];
            chapters[chpIndex].lessons[lessonIndex].lessonname = title;
            chapters[chpIndex].lessons[lessonIndex].description = description;

            this.setState({
                coursedetails: chapters
            });
        };
    };

    deleteLectureHandler = (id, chpid) => {
        if (chpid === null) {
            const detailIndex = this.state.coursedetails.findIndex(d => {
                return d.id === id
            });
            const chapters = [...this.state.coursedetails];
            chapters.splice(detailIndex, 1);
            this.setState({
                coursedetails: chapters
            });
        }
        else {
            const chpIndex = this.state.coursedetails.findIndex(d => {
                return d.id === chpid
            });
            const lessonIndex = this.state.coursedetails[chpIndex].lessons.findIndex(d => {
                return d.id === id
            });
            const chapters = [...this.state.coursedetails];
            chapters[chpIndex].lessons.splice(lessonIndex, 1);

            this.setState({
                coursedetails: chapters
            });
        };
    };

    courseInfoHandler = (coursename, targetaudiance, subject, introduction) => {
        const newCourseInfo = { ...this.state };
        newCourseInfo.coursename = coursename;
        newCourseInfo.targetaudiance = targetaudiance;
        newCourseInfo.subject = subject;
        newCourseInfo.introduction = introduction;

        this.setState({
            coursename: newCourseInfo.coursename,
            targetaudiance: newCourseInfo.targetaudiance,
            subject: newCourseInfo.subject,
            introduction: newCourseInfo.introduction
        });
    };

    render() {
        let i = 0
        let j = 0
        return (
            <div className="fullscreen">
                <section id="previouscontent">
                    <div className="container">
                        <h4>{this.state.coursename}</h4>

                        <CourseInfo
                            coursename={this.state.coursename}
                            targetaudiance={this.state.targetaudiance}
                            subject={this.state.subject}
                            introduction={this.state.introduction}
                            editinfo={this.courseInfoHandler} />

                        {this.state.coursedetails.map((chapter) => {
                            return <div className="row" id="individualchapter" key={chapter.id}>
                                <div id="chaptername">
                                    <span>{i = i + 1}.  {chapter.chaptername}</span>
                                    <EditButtons
                                        chpid={null}
                                        contentid={chapter.id}
                                        title={chapter.chaptername}
                                        description={chapter.description}
                                        editsubmit={this.editHandler}
                                        delete={this.deleteLectureHandler} />
                                </div>

                                {chapter.lessons.map((lesson) => {
                                    return < div id="individualcontent" key={lesson.id} >
                                        <span>{j = j + 1}.  {lesson.lessonname}
                                            <EditButtons
                                                chpid={chapter.id}
                                                contentid={lesson.id}
                                                title={lesson.lessonname}
                                                description={lesson.description}
                                                isexam={lesson.isexam}
                                                editsubmit={this.editHandler}
                                                delete={this.deleteLectureHandler} />
                                        </span>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </section>

                <AddNewButtons
                    disablebutton={this.state.coursedetails.length}
                    newchaptersubmit={this.newChapterHandler}
                    newlessonsubmit={this.newLessonHandler}
                    newexamsubmit={this.newExamHandler} />
            </div>
        )
    }
}

export default CourseContent;
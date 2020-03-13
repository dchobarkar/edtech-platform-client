import React, { Component } from 'react';

import EditButtons from './EditButtons/EditButtons';
import AddNewButtons from '../AddNew/AddNewButtons';

import './CourseContent.css';

class CourseContent extends Component {
    state = {
        id: 9,
        coursename: 'Physics I',
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
                        lessonname: 'exam 1',
                        description: 'Saglyanche Lagnar',
                        id: '8'
                    }
                ]
            }
        ]
    }

    newChapterHandler = (chaptername, description) => {
        const newchapter = {
            chaptername: chaptername,
            description: description,
            id: this.state.id + 1,
            lessons: []
        }
        const addchapter = [...this.state.coursedetails];
        addchapter.push(newchapter);
        console.log(addchapter);
        this.setState({
            id: newchapter.id,
            coursedetails: addchapter
        })
    }

    newLessonHandler = (lessonname, description) => {
        const newlesson = {
            lessonname: lessonname,
            description: description,
            id: this.state.id + 1
        }
        const addlesson = [...this.state.coursedetails]
        const i = addlesson.length - 1;
        console.log(addlesson[i])
        addlesson[i].lessons.push(newlesson)
        this.setState({
            id: newlesson.id,
            coursedetails: addlesson
        })
    }

    newExamHandler = (examname, instructions) => {
        const newexam = {
            isexam: true,
            lessonname: examname,
            description: instructions,
            id: this.state.id + 1
        }
        const addexam = [...this.state.coursedetails]
        const i = addexam.length - 1;
        addexam[i].lessons.push(newexam)
        this.setState({
            id: newexam.id,
            coursedetails: addexam
        })
    }

    // editDetailsHandler = (e, id) => {
    //     const detailsIndex = this.state.coursedetails.findIndex(d => {
    //         return d.id === id
    //     });
    //     const detail = {
    //         ...this.state.coursedetails[detailsIndex]
    //     };
    //     detail.isnew = !detail.isnew;

    //     const details = [...this.state.coursedetails];
    //     details[detailsIndex] = detail;

    //     this.setState({
    //         coursedetails: details,
    //     })
    // }

    deleteLectureHandler = (id, chpid) => {
        if (chpid === null) {
            console.log("Inside Chapter")
            const detailIndex = this.state.coursedetails.findIndex(d => {
                return d.id === id
            });
            const chapters = [...this.state.coursedetails];
            chapters.splice(detailIndex, 1);
            this.setState({
                coursedetails: chapters
            })
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
            console.log(chapters[chpIndex].lessons)
            this.setState({
                coursedetails: chapters
            })
        }
    }

    render() {
        return (
            <div className="fullscreen">
                <section id="previouscontent">
                    <div className="container">
                        <h4>{this.state.coursename}</h4>

                        {this.state.coursedetails.map((chapter, index) => {
                            return <div className="row" id="individualchapter" key={chapter.id}>
                                <div id="chaptername">
                                    <span>{chapter.chaptername}</span>
                                    <EditButtons
                                        contentid={chapter.id}
                                        chpid={null}
                                        description={chapter.description}
                                        delete={this.deleteLectureHandler} />
                                </div>

                                {chapter.lessons.map((lesson, index) => {
                                    return < div id="individualcontent" key={lesson.id} >
                                        <span>{lesson.lessonname}
                                            <EditButtons
                                                contentid={lesson.id}
                                                chpid={chapter.id}
                                                description={lesson.description}
                                                isexam={lesson.isexam}
                                                delete={this.deleteLectureHandler} />
                                        </span>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </section>

                <AddNewButtons
                    newchaptersubmit={this.newChapterHandler}
                    newlessonsubmit={this.newLessonHandler}
                    newexamsubmit={this.newExamHandler} />
            </div>
        )
    }
}

export default CourseContent;
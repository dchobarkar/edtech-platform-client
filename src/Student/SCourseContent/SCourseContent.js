import { Component } from "react";
// // import axios from '../../../axios-server';

// import Spinner from '../../../components/Spinner/Spinner';
// import CModal from '../../../components/CModal/CModal';
// import SCourseDetails from './SCourseDetails/SCourseDetails';
// import SEditButtons from './SEditButtons/SEditButtons';

// import './SCourseContent.css';

class SCourseContent extends Component {
  state = {
    coursetitle: "sdfgsdfg",
    targetaudience_id: 3,
    subject_id: 4,
    courseintro: "fdgsdfhsdfhsdfhsdf",
    sectionentitys: [
      {
        sectiontitle: "just start",
        sectionintro: "sdfsfdhsdfhsdfhhf",
        lectureentitys: [
          {
            lecturetitle: "asdgsfgsdfg",
            lectureintro: "sdfgdsfhsdfsfdh",
            lecturevideo: "sgldsjhfgsdjhfghjgf",
          },
          {
            lecturetitle: "asdgsfgsdfg",
            lectureintro: "sdfgdsfhsdfsfdh",
            lecturevideo: "sgldsjhfgsdjhfghjgf",
          },
          {
            lecturetitle: "asdgsfgsdfg",
            lectureintro: "sdfgdsfhsdfsfdh",
            lecturevideo: "sgldsjhfgsdjhfghjgf",
          },
          {
            lecturetitle: "asdgsfgsdfg",
            lectureintro: "sdfgdsfhsdfsfdh",
            lecturevideo: "sgldsjhfgsdjhfghjgf",
          },
          {
            lecturetitle: "asdgsfgsdfg",
            lectureintro: "sdfgdsfhsdfsfdh",
            lecturevideo: "sgldsjhfgsdjhfghjgf",
          },
          {
            lecturetitle: "asdgsfgsdfg",
            lectureintro: "sdfgdsfhsdfsfdh",
            lecturevideo: "sgldsjhfgsdjhfghjgf",
          },
        ],
        examentitys: [
          { examtitle: "ljksdlgksjdfglsdg", examinstruction: "dsfsdfhsdfh" },
          { examtitle: "ljksdlgksjdfglsdg", examinstruction: "dsfsdfhsdfh" },
          { examtitle: "ljksdlgksjdfglsdg", examinstruction: "dsfsdfhsdfh" },
          { examtitle: "ljksdlgksjdfglsdg", examinstruction: "dsfsdfhsdfh" },
          { examtitle: "ljksdlgksjdfglsdg", examinstruction: "dsfsdfhsdfh" },
        ],
      },
    ],
    loading: false,
    error: false,
    errormsg: null,
  };

  //     // componentDidMount() {
  //     //     this.setState({ loading: true })
  //     //     let config = {
  //     //         headers: {
  //     //             "Authorization": "Bearer " + localStorage.authKey
  //     //         }
  //     //     }
  //     //     const courseid = this.props.match.params.id;
  //     //     axios.get('/course/' + courseid + '/allsections', config)
  //     //         .then(response => {
  //     //             this.setState({
  //     //                 ...response.data,
  //     //                 loading: false
  //     //             })
  //     //         })
  //     //         .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
  //     // }

  //     errorModalHandler = () => {
  //         this.setState({ error: false })
  //     }

  //     render() {
  //         let i = 0;
  //         let j = 0;

  //         let PreviousContent =
  //             <section id="previouscontent">
  //                 {this.state.coursetitle ?
  //                     <div className="container">
  //                         <h4>{this.state.coursetitle}</h4>

  //                         <SCourseDetails
  //                             coursetitle={this.state.coursetitle}
  //                             targetaudience_id={this.state.targetaudience_id}
  //                             subject_id={this.state.subject_id}
  //                             courseintro={this.state.courseintro}
  //                             fee={this.state.fee} />

  //                         {this.state.sectionentitys.map((section) => {
  //                             return <div className="row" id="individualchapter" key={section.section_id}>
  //                                 <div id="chaptername">
  //                                     <span>{i = i + 1}.  {section.sectiontitle}</span>

  //                                     <SEditButtons
  //                                         sectionid={null}
  //                                         contentid={section.section_id}
  //                                         description={section.sectionintro} />
  //                                 </div>

  //                                 {section.lectureentitys.map((lecture) => {
  //                                     return < div id="individualcontent" key={lecture.lecture_id} >
  //                                         <span>{j = j + 1}.  {lecture.lecturetitle}
  //                                             <SEditButtons
  //                                                 sectionid={section.section_id}
  //                                                 contentid={lecture.lecture_id}
  //                                                 description={lecture.lectureintro}
  //                                                 lecturevideo={lecture.lecturevideo} />
  //                                         </span>
  //                                     </div>
  //                                 })}

  //                                 {section.examentitys.map((exam) => {
  //                                     return < div id="individualcontent" key={exam.exam_id} >
  //                                         <span>{j = j + 1}.  {exam.examtitle}
  //                                             <SEditButtons
  //                                                 sectionid={section.section_id}
  //                                                 contentid={exam.exam_id}
  //                                                 description={exam.examinstruction}
  //                                                 isexam={true} />
  //                                         </span>
  //                                     </div>
  //                                 })}
  //                             </div>
  //                         })}
  //                     </div> : null}
  //             </section>

  //         if (this.state.loading) {
  //             PreviousContent = <Spinner />
  //         }

  //         return (
  //             <div className="fullscreen">

  //                 {PreviousContent}

  //                 {this.state.error ?
  //                     <CModal show={this.state.error}
  //                         modalhandler={this.errorModalHandler}>
  //                         {Array.isArray(this.state.errormsg) ?
  //                             <>
  //                                 {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
  //                             </>
  //                             : < p > {this.state.errormsg}</p>}
  //                     </CModal> : null}
  //             </div>
  //         )
  //     }
}

export default SCourseContent;

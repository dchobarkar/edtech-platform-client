import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Spinner from './customFunctions/Spinner/Spinner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import './customFunctions/InputField/InputField.css';
import './App.css';

const Signup = React.lazy(() => {
  return import("./authorization/Signup/Signup")
})
const Login = React.lazy(() => {
  return import("./authorization/Login/Login")
})
const Logout = React.lazy(() => {
  return import("./authorization/Logout/Logout")
})

const LandingPage = React.lazy(() => {
  return import("./components/LandingPage/LandingPage")
})
const Services = React.lazy(() => {
  return import("./components/Services/Services")
})
const ContactUs = React.lazy(() => {
  return import("./components/ContactUs/ContactUs")
})
const About = React.lazy(() => {
  return import("./components/About/About")
})

const BrowseCourses = React.lazy(() => {
  return import('./Common/BrowseCourses/BrowseCourses');
})
const CourseDetails = React.lazy(() => {
  return import('./Common/CourseDetails/CourseDetails');
})

const ClassProfile = React.lazy(() => {
  return import("./Teacher/ClassProfile/ClassProfile")
})
const NewCourse = React.lazy(() => {
  return import("./Teacher/NewCourse/NewCourse")
})
const MyCourse = React.lazy(() => {
  return import("./Teacher/MyCourse/MyCourse")
})
const CourseContent = React.lazy(() => {
  return import("./Teacher/CourseContent/CourseContent")
})
const ExamContent = React.lazy(() => {
  return import("./Teacher/ExamContent/ExamContent")
})

const SMyCourse = React.lazy(() => {
  return import("./Student/SMyCourse/SMyCourse")
})
const SCourseContent = React.lazy(() => {
  return import("./Student/SCourseContent/SCourseContent")
})

const NotFoundPage = React.lazy(() => {
  return import("./components/NotFoundPage/NotFoundPage")
})

const App = React.memo(function App(props) {
  return (
    <BrowserRouter>

      <Navbar />

      <Suspense fallback={
        <div className="fullscreen container">
          <div className="row align-items-center align-middle">
            <Spinner />
          </div>
        </div>
      }>

        <Switch>
          <Route path="/signup" exact render={(props) => <Signup {...props} />} />
          <Route path="/login" exact render={(props) => <Login {...props} />} />
          <Route path="/logout" exact render={(props) => <Logout {...props} />} />

          <Route path="/" exact render={(props) => <LandingPage {...props} />} />
          <Route path="/services" exact render={(props) => <Services {...props} />} />
          <Route path="/contactus" exact render={(props) => <ContactUs {...props} />} />
          <Route path="/about" exact render={(props) => <About {...props} />} />

          <Route path="/browsecourses" exact render={(props) => <BrowseCourses {...props} />} />
          <Route path="/browsecourses/coursedetails/:course_id" exact render={(props) => <CourseDetails {...props} />} />

          <Route path="/classprofile" exact render={(props) => <ClassProfile {...props} />} />
          <Route path="/newcourse" exact render={(props) => <NewCourse {...props} />} />
          <Route path="/mycourse" exact render={(props) => <MyCourse {...props} />} />
          <Route path="/coursecontent/:course_id" exact render={(props) => <CourseContent {...props} />} />
          <Route path="/examcontent/:exam_id" exact render={(props) => <ExamContent {...props} />} />

          <Route path="/student/mycourse" exact render={(props) => <SMyCourse {...props} />} />
          <Route path="/student/coursecontent" exact render={(props) => <SCourseContent {...props} />} />

          <Route render={(props) => <NotFoundPage {...props} />} />
        </Switch>
      </Suspense>

      <Footer />

    </BrowserRouter>
  );
})

export default App;

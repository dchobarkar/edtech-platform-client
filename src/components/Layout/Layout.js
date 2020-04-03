import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import About from '../About/About';
import MyProfile from '../MyProfile/MyProfile';
import Footer from '../Footer/Footer';

import QuestionPaper from '../../containers/AddNew/NewExam/QuestionPaper/QuestionPapar';
import Login from './../../containers/Login/Login';
import Signup from './../../containers/Signup/Signup';
import MyCourse from '../../containers/MyCourse/MyCourse';
import NewCourse from '../../containers/NewCourse/NewCourse';
import CourseContent from '../../containers/CourseContent/CourseContent';

const layout = () => (
    <div>
        <Navbar />

        <Route path="/" exact component={LandingPage} />
        <Route path="/services" exact component={Services} />
        <Route path="/contactus" exact component={ContactUs} />
        <Route path="/about" exact component={About} />
        <Route path="/myprofile" exact component={MyProfile} />
        <Route path="/mycourse" exact component={MyCourse} />
        <Route path="/newcourse" exact component={NewCourse} />
        <Route path="/coursecontent/:id" exact component={CourseContent} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/questionpaper/:id" exact component={QuestionPaper} />

        <Footer />
    </div>
);

export default layout;
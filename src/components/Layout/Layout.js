import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import About from '../About/About';
import MyProfile from '../MyProfile/MyProfile';
import Footer from '../Footer/Footer';

import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest';
import TestDetails from '../../containers/TestDetails/TestDetails';
import NewQuestion from '../../containers/NewTest/NewQuestion/NewQuestion';
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
        <Route path="/coursecontent" exact component={CourseContent} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/newtest" exact component={NewTest} />
        <Route path="/newquestion" exact component={NewQuestion} />
        <Route path="/mytest" exact component={MyTest} />
        <Route path="/testdetails" exact component={TestDetails} />

        <Footer />
    </div>
);

export default layout;
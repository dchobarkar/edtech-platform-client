import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import About from '../About/About';
import LogOut from '../LogOut/LogOut';
import Footer from '../Footer/Footer';

import Login from './../../containers/Login/Login';
import Signup from './../../containers/Signup/Signup';
import MyProfile from '../../containers/MyProfile/MyProfile';
import NewCourse from '../../containers/NewCourse/NewCourse';
import MyCourse from '../../containers/MyCourse/MyCourse';
import CourseContent from '../../containers/CourseContent/CourseContent';
import QuestionPaper from '../../containers/QuestionPaper/QuestionPapar';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

class layout extends Component {

    render() {

        return (
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/contactus" exact component={ContactUs} />
                    <Route path="/about" exact component={About} />
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/login" exact component={Login} />

                    <Route path="/myprofile" exact component={MyProfile} />
                    <Route path="/newcourse" exact component={NewCourse} />
                    <Route path="/mycourse" exact component={MyCourse} />
                    <Route path="/coursecontent/:id" exact component={CourseContent} />
                    <Route path="/questionpaper/:id" exact component={QuestionPaper} />
                    <Route path="/logout" exact component={LogOut} />

                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default layout;
import React from 'react';
import Navbar from '../Navbar/Navbar';
import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest'
import TestDetails from '../../containers/TestDetails/TestDetails';
import Footer from '../Footer/Footer';
import './Layout.css'
import Login from '../Login/Login';
import { Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Signup from '../Signup/Signup'
import NewQuestion from '../../containers/NewTest/NewQuestion/NewQuestion'

const layout = () => (
    <div>

        <Navbar />

        <Route path="/" exact component={LandingPage} />
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
import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../Footer/Footer';

import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest';
import TestDetails from '../../containers/TestDetails/TestDetails';
import NewQuestion from '../../containers/NewTest/NewQuestion/NewQuestion';
import Login from './../../containers/Login/Login';
import Signup from './../../containers/Signup/Signup';

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
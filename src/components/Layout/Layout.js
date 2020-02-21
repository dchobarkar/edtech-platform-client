import React from 'react';
import Navbar from '../Navbar/Navbar';
import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest'
import TestDetails from '../../containers/TestDetails/TestDetails';
import Footer from '../Footer/Footer';
import './Layout.css'

const layout = () => (
    <div>
        <Navbar />
        <NewTest />
        <MyTest />
        <TestDetails />
        <Footer />
    </div>
);

export default layout;
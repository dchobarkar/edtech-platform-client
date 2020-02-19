import React from 'react';
import Navbar from '../Navbar/Navbar';
import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest'
import TestDetails from '../../containers/TestDetails/TestDetails';
import './Layout.css'

const layout = () => (
    <div>
        <Navbar />
        <NewTest />
        <MyTest />
        <TestDetails />
    </div>
);

export default layout;
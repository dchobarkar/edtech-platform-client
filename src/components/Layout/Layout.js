import React from 'react';
import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest'
import TestDetails from '../../containers/TestDetails/TestDetails';
import './Layout.css'

const layout = () => (
    <div>
        <div id="Navbar">
            <li>create new test</li>
            <li>my test</li>
            <li id="right">my accout</li>
        </div>
        
        <NewTest></NewTest>
        <MyTest></MyTest>
        <TestDetails></TestDetails>
    </div>
);

export default layout;
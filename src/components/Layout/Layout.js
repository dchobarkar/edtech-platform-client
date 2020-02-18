import React from 'react';
import NewTest from '../../containers/NewTest/NewTest';
import MyTest from '../../containers/MyTest/MyTest'
import TestDetails from '../../containers/TestDetails/TestDetails';

const layout = () => (
    <div>
        create new test, my test, my accout
        <NewTest></NewTest>
        <MyTest></MyTest>
        <TestDetails></TestDetails>
    </div>
);

export default layout;
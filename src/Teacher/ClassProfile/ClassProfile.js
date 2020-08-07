import React, { useState, useEffect } from 'react';
import { Image, Table } from 'react-bootstrap';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CButton from '../../customFunctions/CButton/CButton';
import Edit from './Edit/Edit';

import './ClassProfile.css';

const ClassProfile = React.memo(function ClassProfile(props) {
    const [classProfileState, setClassProfileState] = useState({
        firstName: '',
        lastName: '',
        className: '',
        mobileNo: '',
        email: '',
        country_id: '',
        country: '',
        state_id: '',
        state: '',
        address: '',
        city: '',
        pincode: '',
        bannerImgUrl: '',
        classIntro: '',
    })
    const [showEditBox, setShowEditBox] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const config = {
        headers: {
            "Authorization": "Bearer " + localStorage.authKey
        }
    }

    // Get class profile information.
    useEffect(() => {
        setIsLoading(true)
        axios.get('/tuser/profile', {
            headers: {
                "Authorization": "Bearer " + localStorage.authKey
            }
        })
            .then(response => {
                setClassProfileState(response.data)
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }, [])

    const showEditBoxHandler = () => {
        setShowEditBox(!showEditBox)
    }

    // Edit Class Profile
    const editClassProfileHandler = (e, classIntro, country_id, state_id, address, city, pincode, bannerImgUrl) => {
        e.preventDefault();
        setIsLoading(true)
        const classProfile = new FormData();
        classProfile.append('classIntro', classIntro)
        classProfile.append('country_id', country_id)
        classProfile.append('state_id', state_id)
        classProfile.append('address', address)
        classProfile.append('city', city)
        classProfile.append('pincode', pincode)
        classProfile.append('bannerImg', bannerImgUrl)

        axios.patch('/tuser/update', classProfile, config)
            .then(response => {
                setClassProfileState(classProfileState => ({
                    ...classProfileState,
                    ...response.data
                }))
                setIsLoading(false)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let classProfile =
        <React.Fragment>
            <div className="row align-items-center">
                <div id="classname" className="shadow p-3 mb-5 bg-white rounded">
                    <h4>{classProfileState.className}</h4>
                </div>
            </div>

            <div className="row">
                <div id="classimg" className="col-sm-3">
                    <Image alt={classProfileState.className} src={classProfileState.bannerImgUrl} roundedCircle />
                </div>

                <div id="classinfotable" className="col-sm-9">
                    <Table responsive>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>: {classProfileState.firstName} {classProfileState.lastName}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>: {classProfileState.email}</td>
                            </tr>
                            <tr>
                                <td>Mobile No.</td>
                                <td>: {classProfileState.mobileNo}</td>
                            </tr>
                            {classProfileState.address !== "" ?
                                <tr>
                                    <td>Address</td>
                                    <td>: {classProfileState.address}, {classProfileState.city}</td>
                                </tr>
                                : null
                            }
                        </tbody>
                    </Table>
                </div>

                <div id="classwelcomenote">
                    <h6>Welcome Note</h6>
                    <p>{classProfileState.classIntro}</p>
                </div>

                {showEditBox ?
                    null :
                    <div id="classprofilebutton">
                        <CButton
                            className="float-right"
                            variant="outline-dark"
                            onClick={showEditBoxHandler}>
                            Edit
                        </CButton>
                    </div>
                }
            </div>
        </React.Fragment>

    if (isLoading) {
        classProfile = <Spinner />
    }

    return (
        <React.Fragment>
            <div id="classinfo" className="fullscreen container" >

                {classProfile}

            </div>

            {showEditBox ?
                <Edit
                    classProfile={classProfileState}
                    showEditBoxHandler={showEditBoxHandler}
                    editClassProfileHandler={editClassProfileHandler} />
                : null
            }
        </React.Fragment>
    )
})

export default withErrorHandler(ClassProfile, axios);
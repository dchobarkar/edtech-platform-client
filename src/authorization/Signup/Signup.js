import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CModal from '../../customFunctions/CModal/CModal';
import CButton from '../../customFunctions/CButton/CButton';

import './Signup.css';

const Signup = React.memo(function Signup(props) {
    // Signup form input state
    const [signupState, setSignupState] = useState({
        firstName: '',
        lastName: '',
        className: '',
        mobileNo: '',
        email: '',
        password: '',
        rePassword: ''
    })
    // Variable to show message after user creation 
    const [isUserCreated, setIsUserCreated] = useState(false)
    // Page loading variable
    const [isLoading, setIsLoading] = useState(false)

    // Input handling function
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSignupState(signupState => ({
            ...signupState,
            [name]: value
        }))
    }

    //    Function to push user to login page
    const userCreatedHandler = () => {
        props.history.push("/login")
    }

    // User signup logic
    const signupHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const user = {
            firstName: signupState.firstName,
            lastName: signupState.lastName,
            className: signupState.className,
            mobileNo: signupState.mobileNo,
            email: signupState.email,
            password: signupState.password
        }
        axios.post('/auth/signup', user)
            .then(response => {
                const tempSignupState = {
                    firstName: '',
                    lastName: '',
                    className: '',
                    mobileNo: '',
                    email: '',
                    password: '',
                    rePassword: ''
                }
                setSignupState(signupState => ({
                    ...tempSignupState
                }))
                setIsLoading(false)
                setIsUserCreated(true)
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let signup =
        <Form onSubmit={(e) => signupHandler(e)}>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="firstName"
                        type="text"
                        value={signupState.firstName}
                        placeholder="Name"
                        required
                        pattern="^[a-zA-Z]{0,50}$"
                        title="Please enter a name consisting only alphabets."
                        onChange={inputChangeHandler} />
                </Form.Group>

                <Form.Group as={Col}  >
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        name="lastName"
                        type="text"
                        value={signupState.lastName}
                        placeholder="Surname"
                        required
                        pattern="^[a-zA-Z]{0,50}$"
                        title="Please enter a surname consisting only alphabets."
                        onChange={inputChangeHandler} />
                </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>Class Name</Form.Label>
                <Form.Control
                    name="className"
                    type="text"
                    value={signupState.className}
                    placeholder="xyz coaching classes"
                    required
                    pattern="^[\w\s]{0,100}$"
                    title="Class name can contain only alphabets."
                    onChange={inputChangeHandler} />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control
                        name="mobileNo"
                        type="text"
                        value={signupState.mobileNo}
                        placeholder="0000000000"
                        required
                        pattern="^[0-9]{10}$"
                        title="Please enter a valid 10 digit mobile no."
                        onChange={inputChangeHandler} />
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        value={signupState.email}
                        placeholder="Class's Email"
                        required
                        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                        title="Please enter a valid email address."
                        onChange={inputChangeHandler} />
                </Form.Group>
            </Form.Row>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    value={signupState.password}
                    placeholder="Password"
                    autoComplete="off"
                    required
                    pattern="((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,20}$"
                    title="Password should contain a small letter, a capital letter, a number & should be 8 to 20 letters long."
                    onChange={inputChangeHandler} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Re-Enter Password</Form.Label>
                <Form.Control
                    name="rePassword"
                    type="password"
                    value={signupState.rePassword}
                    placeholder="Password"
                    autoComplete="off"
                    required
                    pattern={signupState.password}
                    title="Password doesn't match."
                    onChange={inputChangeHandler} />
            </Form.Group>

            <CButton
                type="submit"
                className="float-right"
                variant="outline-dark">
                Create Account
            </CButton>
        </Form>

    if (isLoading) {
        signup = <Spinner />
    }

    return (
        <React.Fragment>
            <div id="signuppage" className="fullscreen container">
                <div className="row">
                    {signup}
                </div>
            </div >

            {/* Modal to be shown after successful signup */}
            <CModal
                show={isUserCreated}
                onHide={userCreatedHandler}>
                <p className="heading-h5">Congratulations !!!</p>
                <p>Let's Login first and start your journey.</p>
                <CButton
                    className="float-right"
                    variant="outline-dark"
                    onClick={userCreatedHandler}>
                    Let's Start
                </CButton>
            </CModal>
        </React.Fragment>
    )
})

export default withErrorHandler(Signup, axios);
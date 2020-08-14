import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../customFunctions/Spinner/Spinner';
import CModal from '../../customFunctions/CModal/CModal';
import CButton from '../../customFunctions/CButton/CButton';

import './Login.css';

const Login = React.memo(function Login(props) {
    // Login input form state
    const [loginState, setLoginState] = useState({
        email: '',
        password: ''
    })
    // Variable to check login status
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // Page loading variable
    const [isLoading, setIsLoading] = useState(false)

    // Check if the user is already logged in
    useEffect(() => {
        if (localStorage.authKey) {
            setIsLoggedIn(true)
        }
    }, [])

    // Input Handling Function
    const inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setLoginState(loginState => ({
            ...loginState,
            [name]: value
        }))
    }

    // Send back to homepage
    const backToHomePageHandler = () => {
        props.history.push('/')
    }

    // Login user request
    const loginHandler = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const user = {
            ...loginState
        }
        axios.post('/auth/login', user)
            .then(response => {
                localStorage.setItem('authKey', response.data.accessToken)
                setIsLoading(false)
                props.history.push('/mycourse')
            })
            .catch(error => {
                setIsLoading(false)
            })
    }

    let loginPage =
        <React.Fragment>
            <Form onSubmit={(e) => loginHandler(e)}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="abc@def.com"
                        required
                        pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                        title="Please enter a valid email address."
                        onChange={inputChangeHandler} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        required
                        pattern="((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,20}$"
                        title="Please enter a valid password."
                        onChange={inputChangeHandler} />
                </Form.Group>

                <CButton
                    type="submit"
                    className="float-right"
                    variant="light">
                    Login
                </CButton>
            </Form>

            <p>New here? <Link to={"/signup"} className="no-decoration">Let's start your journey.</Link></p>
        </React.Fragment>

    if (isLoading) {
        loginPage = <Spinner />
    }

    return (
        <React.Fragment>
            <div className="fullscreen container">
                <div className="row" >
                    <div className="col-lg-9 col-md-8">

                    </div>

                    <div id="loginpage" className="col-lg-3 col-md-4">
                        {loginPage}
                    </div>
                </div>
            </div>

            {/* Modal to be shown if the user is already logged-in */}
            <CModal
                show={isLoggedIn}
                onHide={backToHomePageHandler}>
                <p>Please logout first</p>
            </CModal>

        </React.Fragment>
    )
})

export default withErrorHandler(Login, axios);
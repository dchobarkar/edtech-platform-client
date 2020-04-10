import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../../axios-server';

import LoadingSpinner from '../../components/Spinner/Spinner';
import DModal from '../../components/DModal/DModal';

import './Login.css';

class Login extends Component {
    state = {
        loading: false,
        error: false,
        errormsg: null,
        isloggedin: false
    }

    componentDidMount() {
        if (localStorage.authkey) {
            this.setState({ isloggedin: true })
        }
    }

    inputchangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    errorModalHandler = () => {
        this.setState({ error: false })
    }

    isLoggedInHandler = () => {
        this.props.history.push('/mycourse')
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true })
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('/auth/login', user)
            .then(response => {
                localStorage.setItem('authkey', response.data.accessToken)
                this.setState({ loading: false })
                this.props.history.push('/mycourse')
            })
            .catch(error => { this.setState({ error: true, loading: false, errormsg: error.response.data.message }) })
    }

    render() {

        let loginpage =
            <>
                <Form onSubmit={(e) => this.submitHandler(e)}>
                    <Form.Group className="inputfield">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            title="Email should be valid."
                            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
                            name="email"
                            type="email"
                            placeholder="abc@def.com"
                            onChange={this.inputchangeHandler} />
                    </Form.Group>

                    <Form.Group className="inputfield">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            autoComplete="off"
                            required
                            title="Password should contain 8 to 20 characters."
                            pattern="((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).{8,20}$"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={this.inputchangeHandler} />
                    </Form.Group>

                    <Button
                        className="float-right"
                        variant="light"
                        type="submit">
                        Login
                    </Button>
                </Form>
                <p>Don't have an account? <Link to={"/signup"}>Start here</Link></p>
            </>

        if (this.state.loading) {
            loginpage = <LoadingSpinner />
        }

        return (
            <div className="fullscreen">
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-9">

                        </div>

                        <div className="col-lg-3" id="loginpage">
                            {loginpage}
                        </div>
                    </div>
                    {this.state.error ?
                        <DModal show={this.state.error}
                            modalhandler={this.errorModalHandler}>
                            {Array.isArray(this.state.errormsg) ?
                                <>
                                    {this.state.errormsg.map((msg, Index) => { return <p key={Index}>{msg}</p> })}
                                </>
                                : < p > {this.state.errormsg}</p>}
                        </DModal> : null}

                    {this.state.isloggedin ?
                        <DModal show={this.state.isloggedin}
                            modalhandler={this.isLoggedInHandler}>
                            <p>Please logout first</p>
                        </DModal> : null}
                </div>
            </div>
        )
    }
}

export default Login;
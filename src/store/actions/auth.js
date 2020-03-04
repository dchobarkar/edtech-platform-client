import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authdata) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authdata: authdata
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (e, p) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: e,
            password: p,
            returnSecureToken: true
        };
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBmzi6_BYPR-pKGQuunBytx5RTuDqIeK8s', authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });

    }
};
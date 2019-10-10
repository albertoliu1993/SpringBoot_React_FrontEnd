import axios from 'axios';

import * as actionTypes from './actionsType';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (token, name) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        accessToken: token,
        name: name
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime*1000);
    };
};

export const signin = (email, password) => {
    return dispatch => {
        //authenticate the user 
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios({
            method: 'post',
            url: "http://localhost:8080/api/auth/signin",
            data: authData,
            headers: {'Content-Type' : 'application/json;charset=UTF-8'}
        }).then(response => {
            console.log(response);
            dispatch(authSuccess(response.data.accessToken, response.data.name));
            dispatch(checkAuthTimeOut(response.data.expiresIn))
        }).catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        });
    };
};
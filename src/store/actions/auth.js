import axios from 'axios';

import * as actionTypes from './actionsType';

export const authStart = () =>{
    return {
        type: actionTypes.AUTH_START
    };
};
export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const auth = (username, email, password) => {
    return dispatch => {
        //authenticate the user 
        dispatch(authStart());
        const authData = {
            userName: username,
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios({
            method: 'post',
            url: "http://localhost:8080/api/auth/signup",
            data: authData,
            headers: {'Content-Type' : 'application/json;charset=UTF-8'}
        }).then(response => {
            console.log(response);
            dispatch(authSuccess(response.data));
        }).catch(err => {
            console.log(err);
            dispatch(authFail());
        });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}
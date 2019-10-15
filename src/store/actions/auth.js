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

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (username, email, password) => {
    return dispatch => {
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
            const expiration = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('expirationDate', expiration);
            localStorage.setItem('name', response.data.name);
            dispatch(authSuccess(response.data.accessToken, response.data.name));
            dispatch(checkAuthTimeout(response.data.expiresIn));
        }).catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        });
    };
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(logout());
        }else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if(expirationDate <= new Date()){
                dispatch(logout());
            }else{
                const userName = localStorage.getItem('name');
                dispatch(authSuccess(token, userName));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())));
            }
        }
    }
}
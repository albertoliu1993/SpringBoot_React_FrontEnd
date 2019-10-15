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
            const expiration = new Date(new Date().getTime() + response.data.expiresIn * 1000);
            localStorage.setItem('token', response.data.accessToken);
            localStorage.setItem('expirationDate', expiration);
            localStorage.setItem('name', response.data.name);
            dispatch(authSuccess(response.data.accessToken, response.data.name));
        }).catch(err => {
            console.log(err);
            dispatch(authFail(err.response.data.error));
        });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}


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
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            }
        }
    }
}
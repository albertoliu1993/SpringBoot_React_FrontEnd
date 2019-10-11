import * as actionsTypes from '../actions/actionsType';
import {updateObject} from '../utility'

const initialState = {
    token : null,
    name: null,
    error: null,
    loading: false,
    authRedirectPath: '/'
};

const authStart = (state, action) => {
    return updateObject(state, {
        error: null, 
        loading:true
    });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.accessToken,
        name: action.name,
        error: null,
        loading: false
    });
};

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {token: null, name: null});
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, {authRedirectPath: action.path})
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionsTypes.AUTH_START:return authStart(state, action);
        case actionsTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionsTypes.AUTH_FAIL: return authFail(state, action);
        case actionsTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionsTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;
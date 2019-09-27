import axios from 'axios';
import * as types from './loginTypes'

export const loginUserSuccess = payload => ({
    type: types.LOGIN_USER_SUCCESS,
    payload,
});
  
// export const login
export const loginUser = userData => {
    return dispatch => {
    axios.post('/api/login', userData)
        .then(res => {
            // console.log("hi", "respond")
            dispatch(loginUserSuccess(res));
            const {Auth }  = res.data;
            localStorage.setItem("jwtAuth", Auth);
        }).catch(err => (
            console.log("err")
        ))
}
}

export const currentUser = decoded => {
    return {
        type: types.SET_CURRENT_USER,
        payload: decoded,
    }
}
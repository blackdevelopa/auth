import * as types from './loginTypes';

const initialState = {
    isLoggedIn: false,
    success: false,
    user: {}
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                success: true
            }
            default: 
                return state;
    }
}

export default loginReducer
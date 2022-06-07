import { handleActions } from "redux-actions";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export const login = user => ({
    type: LOGIN,
    user
});

export const logout = () => ({
    type: LOGOUT
})

const initialState = {
    user: null
};

function userState(state = initialState, action){
    switch(action.type){
        case LOGIN: 
            return{
                ...state,
                user: action.user
            };
        case LOGOUT:
            return{
                ...state,
                user:null
            };
        default:
            return state;

    };
};

export default userState;
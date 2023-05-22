import { RESET_TOKEN, SET_TOKEN } from '../actions';

const initialState = {
    token: '',
};
// eslint-disable-next-line default-param-last
export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            };
        case RESET_TOKEN:
            return {
                ...state,
                token: '',
            };
        default:
            return state;
    }
};

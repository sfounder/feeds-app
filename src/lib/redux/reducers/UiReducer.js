import { RESET_ERROR_MESSAGE, SET_ERROR_MESSAGE } from '../actions';

const initialState = {
    errorMessage: '',
};

// eslint-disable-next-line default-param-last
export const UiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload,
            };
        case RESET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: '',
            };
        default:
            return state;
    }
};

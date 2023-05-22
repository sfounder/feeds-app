import { SET_SELECTED_POST_ID } from '../actions';

const initialState = {};

// eslint-disable-next-line default-param-last
export const CommentsFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_POST_ID:
            return {
                ...state,
                selectedPostId: action.payload,
            };
        default:
            return state;
    }
};

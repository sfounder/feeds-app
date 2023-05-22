// Core
import { combineReducers } from 'redux';

// Reducers
import { CommentsFormReducer } from './CommentsFormReducer';
import { UiReducer } from './UiReducer';
import { AuthReducer } from './AuthReducer';

export const rootReducer = combineReducers({
    commentsForm: CommentsFormReducer,
    ui:           UiReducer,
    auth:         AuthReducer,
});

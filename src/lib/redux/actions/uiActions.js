export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const setErrorMessage = (message) => ({ type: SET_ERROR_MESSAGE, payload: message });
export const resetErrorMessage = () => ({ type: RESET_ERROR_MESSAGE });

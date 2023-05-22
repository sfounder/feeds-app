// Core
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';

// Redux
import { getErrorMessage, resetErrorMessage } from '../lib/redux';

// Constants
import { toastOptions } from '../constants/toastOptions';


export const useToastErrorNotify = () => {
    const  errorMessage = useSelector(getErrorMessage);
    const dispatch      = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            const notify = () => toast.error(errorMessage, toastOptions);

            notify();
            dispatch(resetErrorMessage());
        }
    }, [errorMessage]);
};

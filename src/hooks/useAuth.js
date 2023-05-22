// Core
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

// API
import { api } from '../api';

// Redux
import { setErrorMessage } from '../lib/redux';

export const useAuth = () => {
    const dispatch = useDispatch();

    const { isError, isFetched } = useQuery({
        queryKey: ['auth'],
        queryFn:  api.auth.auth,
        retry:    false,
        onError:  (error) => {
            dispatch(setErrorMessage(error.response?.data?.message));
        },
    });

    return { isError, isFetched };
};

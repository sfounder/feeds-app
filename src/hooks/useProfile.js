// Core
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

// API
import { api } from '../api';

// Redux
import { setErrorMessage } from '../lib/redux';

export const useProfile = () => {
    const dispatch = useDispatch();
    const { data, isFetched } = useQuery({
        queryKey: ['profile'],
        queryFn:  api.profile.fetch,
        onError:  (error) => {
            dispatch(setErrorMessage(error.response?.data?.message));
        },
    });

    return { data: data?.data, isFetched };
};

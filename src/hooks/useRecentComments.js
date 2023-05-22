// Core
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

// API
import { api } from '../api';

// Redux
import { setErrorMessage } from '../lib/redux';

export const useRecentComments = () => {
    const dispatch = useDispatch();
    const { data, isFetched, isError } = useQuery({
        queryKey: ['recentComments'],
        queryFn:  api.posts.getComments,
        onError:  (error) => {
            dispatch(setErrorMessage(error.response?.data?.message));
        },
    });

    return { data: Array.isArray(data?.data) ? data.data : [], isFetched, isError };
};

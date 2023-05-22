// Core
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

// API
import { api } from '../api';

// Redux
import { setErrorMessage } from '../lib/redux';

export const usePostDetails = (id) => {
    const dispatch = useDispatch();
    const { data, isFetched, isError } = useQuery({
        queryKey: ['postDetails'],
        queryFn:  () => api.posts.getPostById(id),
        onError:  (error) => {
            dispatch(setErrorMessage(error.response?.data?.message));
        },
    });

    return { data: data?.data || {}, isFetched, isError };
};

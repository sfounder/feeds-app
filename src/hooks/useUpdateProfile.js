// Core
import { useMutation } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';

// API
import { api } from '../api';

// Lib
import { queryClient } from '../lib';

// Redux
import { setErrorMessage } from '../lib/redux';

export const useUpdateProfile = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: api.profile.updateProfile,
        onSettled:  () => {
            queryClient.invalidateQueries({
                queryKey: ['profile'],
            });
        },
        onError: (error) => {
            dispatch(setErrorMessage(error.response?.data?.message));
        },
    });
};

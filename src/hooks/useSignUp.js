// Core
import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// API
import { api } from '../api';

// Redux
import { setErrorMessage, setToken } from '../lib/redux';

export const useSignUp = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const mutation = useMutation({
        mutationFn: api.auth.signup,
        onError:    (error) => {
            dispatch(setErrorMessage(error.response?.data?.message));
        },
    });

    useEffect(() => {
        const token =  mutation.data?.data;
        if (mutation.isSuccess && token) {
            localStorage.setItem('token', token);
            dispatch(setToken(token));
            navigation('/feed');
        }
    }, [mutation.isSuccess]);

    return mutation;
};

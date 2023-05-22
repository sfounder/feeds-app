// Core
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Redux
import { resetToken } from '../../lib/redux';

// Hooks
import { useAuth } from '../../hooks';


export const AuthChecking = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, isFetched } = useAuth();

    useEffect(() => {
        if (isError) {
            dispatch(resetToken());
            navigate('/login');
        }
    }, [isError]);

    return isFetched && children;
};

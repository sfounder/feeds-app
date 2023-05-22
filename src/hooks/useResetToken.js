// Core
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Redux
import { resetToken } from '../lib/redux';

export const useResetToken = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return () => {
        localStorage.removeItem('token');
        dispatch(resetToken());
        navigate('/login');
    };
};

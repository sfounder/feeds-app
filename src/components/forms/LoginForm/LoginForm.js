// Core
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Hooks
import { useLogin } from '../../../hooks';

// Elements
import { Input } from '../elements';

// Other
import { schema } from './config';

export const LoginForm = () => {
    const { mutateAsync } = useLogin();
    const {
        handleSubmit, reset, formState, register,
    } = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit(async (data) => {
        await mutateAsync(data);
        reset();
    });

    return (
        <form className = 'form centered' onSubmit = { onSubmit }>
            <div className = 'wrapper centered'>
                <div className = 'logo'></div>
                <div>
                    <Input
                        placeholder = 'Электропочта' error = { formState.errors.email }
                        register = { register('email') } />
                    <Input
                        placeholder = 'Пароль' error = { formState.errors.password }
                        register = { register('password') } type = 'password' />
                    <button className = 'loginSubmit' type = 'submit'>Войти</button>
                </div>
                <p className = 'options'>Нет аккаунта?<Link to = '/signup'>Создать</Link></p></div>
        </form>
    );
};

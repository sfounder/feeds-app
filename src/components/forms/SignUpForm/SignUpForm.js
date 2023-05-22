// Core
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Elements
import { Input } from '../elements';

// Hooks
import { useSignUp } from '../../../hooks';

// Other
import { schema } from './config';

export const SignUpForm = () => {
    const { mutateAsync } = useSignUp();
    const {
        handleSubmit, reset, formState, register,
    } = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const onSubmit = handleSubmit(async (data) => {
        const { confirmPassword, ...newUser } = data;
        await mutateAsync(newUser);
        reset();
    });

    return (
        <form className = 'form centered' onSubmit = { onSubmit }>
            <div className = 'wrapper centered'>
                <div className = 'logo'></div>
                <div>
                    <Input
                        placeholder = 'Имя' error = { formState.errors.name }
                        register = { register('name') } />
                    <Input
                        placeholder = 'Почта' error = { formState.errors.email }
                        register = { register('email') } />
                    <Input
                        placeholder = 'Пароль' error = { formState.errors.password }
                        register = { register('password') } type = 'password' />
                    <Input
                        placeholder = 'Пароль' error = { formState.errors.confirmPassword }
                        register = { register('confirmPassword') } type = 'password' />
                    <button className = 'signupSubmit' type = 'submit'>Создать аккаунт</button>
                </div>
                <p className = 'options'>Есть аккаунт?<Link to = '/login'>Войти</Link></p></div>
        </form>
    );
};

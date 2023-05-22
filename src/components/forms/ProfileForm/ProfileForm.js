// Core
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Hooks
import { useProfile, useUpdateProfile } from '../../../hooks';

// Helpers
import { fetchify } from '../../../helpers';

// Elements
import { Input } from '../elements';

// Other
import { schema } from './config';


export const ProfileForm = () => {
    const { data: profile, isFetched } = useProfile();
    const { mutateAsync } = useUpdateProfile();
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

    const profileJSX = (
        <>
            <h1>Привет, { profile?.name }</h1>
            <img src = { profile?.avatar } alt = 'avatar' />
        </>
    );

    return (
        <form className = 'form' onSubmit = { onSubmit }>
            <div className = 'wrapper'>
                <div>
                    { fetchify({ content: profileJSX, isFetched }) }
                    <Input
                        placeholder = 'Имя' error = { formState.errors.firstName }
                        register = { register('firstName') } />
                    <Input
                        placeholder = 'Фамилия' error = { formState.errors.lastName }
                        register = { register('lastName') } />
                    <button className = 'loginSubmit' type = 'submit'>Обновить профиль</button></div>
                <Link to = '/profile/new-password'>Cменить пароль →</Link></div>
        </form>
    );
};

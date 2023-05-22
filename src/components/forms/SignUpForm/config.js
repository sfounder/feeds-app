import * as yup from 'yup';
// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина - ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';

export const schema = yup.object().shape({
    name: yup
        .string()
        .min(3, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
    email: yup
        .string()
        .email()
        .required('*'),
    password: yup
        .string()
        .min(8, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Пароли должны совпадать')
        .required('*'),
});

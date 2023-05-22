import * as yup from 'yup';
// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'минимальная длина - ${min} символов';

// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';

export const schema = yup.object().shape({
    firstName: yup
        .string()
        .min(3, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
    lastName: yup
        .string()
        .min(3, tooShortMessage)
        .max(16, tooLongMessage)
        .required('*'),
});

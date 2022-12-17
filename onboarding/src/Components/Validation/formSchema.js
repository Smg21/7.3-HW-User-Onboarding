import * as yup from 'yup';

const formScheme = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required('Username is required!')
})
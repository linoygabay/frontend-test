import * as yup from 'yup';

export const formScheme = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    age: yup.number()
        .required('Age is required')
        .positive('Age must be a positive number')
        .integer('Age must be an integer')
        .min(0, 'Age must be greater than 0')
        .max(120, 'Age must be less than or equal to 120')
});

import * as yup from 'yup';

export const loginInitialValue = {
    username: '',
    password: '',
    mobilenumber: '',
    fullname: '',
};


// export const loginValidationSchema = {
//     username: yup.string().required('UserName is required'),
//     password:yup.string().required('Password is required')
// }

export const loginValidationSchema = yup.object().shape({
    username: yup.string()
        .required('*Username is required'),
    password: yup.string()
        .required('*Password is required')
        .min(6, 'Password must be at least 6 characters long'),
    mobilenumber: yup.string()
        .required('*MobileNumber is required')
        .matches(/^[0-9]{10}$/, 'MobileNumber must be exactly 10 digits'),
        fullname:yup.string()
        .required('*FullName is required')
        .min(10,'FullNmae must be atleast 10 character long')

});


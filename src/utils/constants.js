import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    url: Yup.string()
        .required("This field is Required")
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )

    ,
    title: Yup.string()
        .required("This field is Required")
        .min(1, 'Must be exactly 1 character')
        .max(100, 'Must be exactly 100 character')
});

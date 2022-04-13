import { useState, useEffect } from 'react';  

const useForm = (callback, validate) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target; //now we don't have to write e.target.name: e.target.value
        setValues({
            ...values,
            [name]: value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
        isSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    }, [errors]
    );

    return { handleChange, values, handleSubmit, errors };
}

export default useForm;
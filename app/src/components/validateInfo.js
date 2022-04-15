export default function validateInfo(values) {
    let errors = {};

    if(!values.name.trim()) {
        errors.name = 'Name required';
    }

    if(!values.email) {
        errors.email = 'Email required';
    } //find out how to show if email is invalid

    if(!values.password) {
        errors.password = 'Password is required';
    } else if(values.password.length < 6) {
        errors.password = 'Password needs to be 6 characters or more';
    }

    if(!values.password2) {
        errors.password2 = 'Password is required'; 
    } if(values.password2 !== values.password) {
        errors.password2 = 'Passwords do not match';
    }

    return errors;
}
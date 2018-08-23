let validator = {};

validator.getloginValidator = (req, type) => {
    let input = {
        login: {
            email: ['isEmail', ('EMAIL_REQUIRE', { FIELD: 'Valid email address' })],
        }
    };
    return input[type];
}

export default validator;

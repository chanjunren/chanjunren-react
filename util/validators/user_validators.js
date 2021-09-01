const passwordValidator = require('password-validator');

const isValidPassword = (password) => {
  var schema = new passwordValidator();
  schema
    .is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(2)
    .has().not().spaces();

    return schema.validate(password);
}



exports.isValidPassword = isValidPassword;
const User = require('../models/user');
const HttpError = require('../models/http_error');
const { isValidPassword } = require('../util/validators/user_validators');
const bcrypt = require('bcrypt');

const getAllUsers = async (req, res, next) => {
  console.log('Get all users in user controller called');
};

const createUser = async (req, res, next) => {
  const { role, username, password } = req.body;
  if (role !== 'USER' && role !== 'ADMIN') {
    return next(new HttpError('Invalid role!', 409));
  }

  if (!isValidPassword(password)) {
    return next(new HttpError('Password too weak!', 409));
  }

  if (username === '' || !username) {
    return next(new HttpError('Invalid username!', 409));
  }

  const existingUser = await User.findOne({ username: username });

  if (existingUser) {
    console.log(existingUser);
    return next(new HttpError('This user already exists! D:', 409));
  }

  let hashedPw;
  try {
    hashedPw = bcrypt.hash(password, 12);
  } catch (err) {
    return next(
      new HttpError(
        'An error occured while attempting to hash the password! D:',
        401,
      ),
    );
  }

  const newUser = new User({
    role: role,
    username: username,
    password: password,
  });

  try {
    console.log(' === USER SUCCESFULLY ADDED ===');
    await newUser.save();
    console.log(newUser.toObject({ getters: true }));
  } catch (err) {
    return next(
      new HttpError(
        'Something went wrong when trying to create this user! D:',
        500,
      ),
    );
  }
  res.status(201).json({message: 'User succesfully created! :D'});

};

const loginUser = (req, res, next) => {
  console.log('Login user in user controller called');
};

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;

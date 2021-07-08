const User = require('../models/user');
const HttpError = require('../models/http_error');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { isValidPassword } = require('../util/validators/user_validators');
const { jwtPrivateKey } = require('../util/values');

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    return next(
      new HttpError(
        'Something went wrong when trying to get all users! :(',
        500,
      ),
    );
  }

  res
    .status(201)
    .json({ users: users.map((user) => user.toObject({ getters: true })) });
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
    return next(new HttpError('This user already exists! D:', 409));
  }

  let hashedPw;
  try {
    hashedPw = await bcrypt.hash(password, 12);
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
    password: hashedPw,
  });

  try {
    console.log(' === USER SUCCESFULLY ADDED ===');
    await newUser.save();
    console.log(newUser.toObject({ getters: true }));
  } catch (err) {
    console.error(err);
    return next(
      new HttpError(
        'Something went wrong when trying to create this user! D:',
        500,
      ),
    );
  }
  res.status(201).json({ message: 'User succesfully created! :D' });
};

const loginUser = async (req, res, next) => {
  const { username, password } = req.body;
  let user;
  try {
    user = await User.findOne({ username: username });
    if (!user) {
      return next(new HttpError('This user does not exist', 401));
    }
  } catch (err) {
    return next(
      new HttpError(
        'Something went wrong when trying to find this user! :(',
        500,
      ),
    );
  }

  let isCredentialsCorrect;
  try {
    isCredentialsCorrect = await bcrypt.compare(password, user.password);
  } catch (err) {
    return next(
      new HttpError('An error occured while validating your password!', 401),
    );
  }

  if (!isCredentialsCorrect) {
    return next(
      new HttpError('The password you entered is incorrect! D:', 401),
    );
  }

  let token;
  try {
    token = jwt.sign(
      {
        role: user.role,
        username: user.username,
      },
      jwtPrivateKey,
      { expiresIn: '1h' },
    );
    res.status(201).json({ username: user.username, token: token });
  } catch (err) {
    console.error(err);
    return next(
      new HttpError('Something went wrong when generating the token! D:', 401),
    );
  }
};

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;

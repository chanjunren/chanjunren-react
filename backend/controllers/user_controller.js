const getAllUsers = (req, res, next) => {
  console.log("Get all users in user controller called");
};

const createUser = (req, res, next) => {
  console.log("Create user in user controller called");
};

const loginUser = (req, res, next) => {
  console.log("Login user in user controller called");
};

exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.loginUser = loginUser;

// const Product = require('../models/productModel');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const {
  registerUserValidation,
} = require('../validation/registerUserValidation');
//npm bcrypt
async function registerUser(user) {
  registerUserValidation(user);

  // chek if
  const userExists = await User.find();

  if (userExists?.length) throw new Error('User already exists');

  // hash password
  const hashedPwd = await bcrypt.hash(user.password, 10);

  const newUser = await User.create({
    username: user.username,
    password: hashedPwd,
  });

  return newUser;
}
module.exports = registerUser;

const User = require('../models/userModel');
const bcrypt = require('bcrypt');

async function loginUser(user) {
  const { username, password } = user;

  if (!username || !password)
    throw new Error('username and password are required');

  const findUser = await User.findOne({ username });

  if (!findUser) throw new Error('username or password is incorrect');

  const match = await bcrypt.compare(password, findUser.password);
  if (!match) throw new Error('username or password is incorrect');

  return 'this is loginUser function';
}
module.exports = loginUser;

function registerUserValidation(user) {
  if (typeof !user?.username !== 'string' || !user?.username?.trim()) {
    throw new Error('userName validatet');
  }
  if (typeof !user?.password !== 'string' || !user?.username?.trim()) {
    throw new Error('Password validated');
  }
}
module.exports = { registerUserValidation };

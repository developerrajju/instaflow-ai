const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

const matchPassword = async (entered, stored) => {
  return await bcrypt.compare(entered, stored);
};

module.exports = { hashPassword, matchPassword };

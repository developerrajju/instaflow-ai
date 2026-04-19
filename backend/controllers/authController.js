const User = require("../models/User");
const generateToken = require("../utils/generateToken");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  res.json({
    _id: user._id,
    email: user.email,
    token: generateToken(user._id),
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  res.json({
    _id: user._id,
    email: user.email,
    token: generateToken(user._id),
  });
};

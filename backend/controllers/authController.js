const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const { hashPassword, matchPassword } = require("../utils/hashPassword");

// REGISTER
exports.register = async (req, res) => {
try {
const { email, password } = req.body;

```
const existingUser = await User.findOne({ email });
if (existingUser) {
  return res.status(400).json({ message: "User already exists" });
}

const hashedPassword = await hashPassword(password);

const user = await User.create({
  email,
  password: hashedPassword,
});

res.json({
  _id: user._id,
  email: user.email,
  token: generateToken(user._id),
});
```

} catch (err) {
res.status(500).json({ message: err.message });
}
};

// LOGIN
exports.login = async (req, res) => {
try {
const { email, password } = req.body;

```
const user = await User.findOne({ email });

if (!user || !(await matchPassword(password, user.password))) {
  return res.status(400).json({ message: "Invalid credentials" });
}

res.json({
  _id: user._id,
  email: user.email,
  token: generateToken(user._id),
});
```

} catch (err) {
res.status(500).json({ message: err.message });
}
};

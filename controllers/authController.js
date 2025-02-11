const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwt_secret =
  "2aaae03d82c958a3d340977c78f6941b71143994605a663a663a9faa7d75003277433608f1a4231ac7e4465c452483687266d7942cd2f03c0a3abb16063b98fc";
const User = require("../models/user");

require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "This username is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "User registered successfully." });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.body.username } });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).send("Authentication failed");
    }
    console.log(`user id and role ${user.id} ${user.role}`);
    const token = jwt.sign({ id: user.id, role: user.role }, jwt_secret, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { registerUser, loginUser };
